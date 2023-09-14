import PocketBase, { RecordListOptions, RecordModel, RecordSubscription } from 'pocketbase'
import { Post, Tag, User, pagination } from './types';

export class pb {
    private instance: PocketBase;
    user?: User;
    isLoggedIn: boolean = false;

    constructor(url) {
        this.instance = new PocketBase(url)
        console.log("PocketBase instance created")
        console.log(this.instance.authStore.isValid)

        // Immediately check if the user is logged in and assign it to the user variable
        if (this.instance.authStore.isValid) {
            // update the user variable whenever the token changes
            this.user = this.instance.authStore.model!! as User
            this.isLoggedIn = true
        } else {
            this.user = undefined
            this.isLoggedIn = false
        }

        this.instance.authStore.onChange((_, user) => {
            this.user = user!! as User
            this.isLoggedIn = user!! != undefined
        }, true);
    }

    private subscribePosts(callback: (data: RecordSubscription<Post>) => void) {
        this.instance.collection("posts").subscribe("*", callback)
    }

    private getPostsRaw(pagination: pagination, options: RecordListOptions) {
        return this.instance.collection("posts").getList<Post & RecordModel>(pagination.first, pagination.last, options)
    }

    getPosts(pagination: pagination) {
        return new Promise<Post[]>(async (resolve, reject) => {
            await this.getPostsRaw(pagination, {
                sort: '-created',
                expand: 'tags,author',
            }).then((posts) => {
                const newPosts = posts.items.map((post) => {
                    return { ...post, author: post.expand?.author, tags: post.expand?.tags }
                })
                resolve(newPosts)
            })
        })
    }

    async createTagIfNotExists(tagName) {
        try {
            return await this.instance.collection('tags').create<Tag>({ 'name': tagName }, { '$autoCancel': false });
        } catch (error) {
            //    try fetching the tag if it already exists in the db
            try {
                const existingTag = await this.instance.collection('tags').getFirstListItem<Tag>(`name = "${tagName}"`);
                return existingTag;
            } catch (error) {
                throw error;
            }
        }
    }

    async createTags(tags: string[]) {
        // Create new tags in parallel
        const promises = tags.map((tagName) => {
            return this.createTagIfNotExists(tagName)
        });
        return await Promise.all(promises);
    }

    async createPost(post: Post) {
        let tags: Tag[] = await this.createTags(post.tags!! as string[])
        post.tags = tags.map((tag) => tag.id) as string[]
        return await this.instance.collection("posts").create(post)
    }

    async updatePost(post: Post) {
        // make sure the id exists in the object
        if (!post.id) {
            throw new Error("Post ID is required")
        }
        return await this.instance.collection("posts").update(post.id, post)
    }

    async deletePost(post: Post) {
        if (!post.id) {
            throw new Error("Post ID is required")
        }
        return await this.instance.collection("posts").delete(post.id)
    }

    logout() {
        this.instance.authStore.clear()
    }

    async loginWithUsernameAndPassword(username: string, password: string) {
        return this.instance.collection('users').authWithPassword(username, password)
    }

    async initLoginPopup() {
        return await this.instance.collection('users').authWithOAuth2({ provider: 'microsoft' });
    }
}


