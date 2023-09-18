import PocketBase, { RecordListOptions, RecordModel, RecordSubscription } from 'pocketbase'
import { BaseUser, Post, Tag, User, pagination } from './types';
import { BehaviorSubject } from "rxjs";

export class pb {
    private instance: PocketBase;
    user?: User;
    isLoggedIn: boolean = false;
    postsObservable: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

    constructor(url) {
        this.instance = new PocketBase(url)
        // console.log("PocketBase instance created")
        // console.log(this.instance.authStore.isValid)
        this.instance.autoCancellation(false);

        // Immediately check if the user is logged in and assign it to the user variable
        if (this.instance.authStore.isValid) {
            // update the user variable whenever the token changes
            this.user = this.instance.authStore.model! as User
            this.isLoggedIn = true
        } else {
            this.user = undefined
            this.isLoggedIn = false
        }

        this.instance.authStore.onChange((_, user) => {
            this.user = user!! as User
            this.isLoggedIn = user!! != undefined
        }, true);
        this.getPostsAndUpdateObservable({ first: 1, last: 50 })

        this.subscribeToPostsAndUpdateObservable().then(() => {
            console.log("Subscribed to posts")
        }).catch((error) => {
            console.log("Error subscribing to posts")
            console.log(error)
        })

    }

    private subscribePosts(callback: (data: RecordSubscription<Post>) => void) {
        return this.instance.collection("posts").subscribe("*", callback)
    }

    private getPostsRaw(pagination: pagination, options: RecordListOptions) {
        return this.instance.collection("posts").getList<Post & RecordModel>(pagination.first, pagination.last, options)
    }

    async getPostsAndUpdateObservable(pagination: pagination) {
        await this.getPostsRaw(pagination, {
            sort: '-created',
            expand: 'tags,author',
        }).then((posts) => {
            const newPosts = posts.items.map((post) => {
                return { ...post, author: post.expand?.author, tags: post.expand?.tags }
            })
            this.postsObservable.next(newPosts)
        })
    }

    async subscribeToPostsAndUpdateObservable() {
        await this.subscribePosts(data => {
            if (data.action == "create") {
                const currentData = this.postsObservable.value
                this.instance.collection("posts").getOne(data.record.id as string, { expand: 'tags,author' }).then((post) => {
                    const newPost = { ...post, author: post.expand?.author, tags: post.expand?.tags }
                    const newData: Post[] = [{ ...newPost as unknown as Post }, ...currentData]
                    this.postsObservable.next(newData)
                })

            } else if (data.action == "update") {
                const currentData = this.postsObservable.value
                this.instance.collection("posts").getOne(data.record.id as string, { expand: 'tags,author' }).then((post) => {
                    const editedPost = { ...post, author: post.expand?.author, tags: post.expand?.tags }
                    // console.log(editedPost)
                    const newData = currentData.map((post) => {
                        if (post.id == post.id) {
                            return editedPost as unknown as Post
                        }
                        return post
                    })
                    this.postsObservable.next(newData)
                })
            } else if (data.action == "delete") {
                const currentData = this.postsObservable.value
                const newData = currentData.filter((post) => post.id != data.record.id)
                this.postsObservable.next(newData)
            } else {
                console.log("Unknown action")
            }
        })
    }

    async createTagIfNotExists(tagName) {
        try {
            return await this.instance.collection('tags').create<Tag>({ 'name': tagName });
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

    private validateTags(tags: Tag[] | string[]): tags is string[] {
        if (Array.isArray(tags)) {
            // Check if all elements are strings
            return tags.every((tag) => typeof tag === 'string');
        }
        return false;
    }

    private validateAuthor(author: BaseUser | string): author is string {
        return typeof author === 'string';
    }


    async createPost(post: Post) {
        // validation: 
        // make sure the tags exist and type of tags is string[]
        if (!this.validateTags(post.tags!!)) {
            throw new Error("Tags must be a string[]")
        }
        // make sure the author exists and type of author is string
        if (!this.validateAuthor(post.author!!)) {
            throw new Error("Author must be a string")
        }

        let tags: Tag[] = await this.createTags(post.tags)
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


