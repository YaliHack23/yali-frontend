import PocketBase, { RecordListOptions, RecordModel, RecordSubscription } from 'pocketbase'
import { Post, User, pagination } from './types';

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

    getPosts(pagination: pagination, options: RecordListOptions) {
        return this.instance.collection("posts").getList(pagination.first, pagination.last, options)
    }

    async createPost(post: Post) {
        return await this.instance.collection("posts").create(post)
    }

    async updatePost(post: Post) {
        return await this.instance.collection("posts").update(post.id, post)
    }

    async deletePost(post: Post) {
        return await this.instance.collection("posts").delete(post.id)
    }

    logout() {
        this.instance.authStore.clear()
    }

    async initLoginPopup() {
        return await this.instance.collection('users').authWithOAuth2({ provider: 'microsoft' });
    }
}


