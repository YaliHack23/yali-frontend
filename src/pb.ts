import PocketBase from 'pocketbase'

export const pb = new PocketBase('https://yalihack.azurewebsites.net/');

export async function fetchUser() {
    return await pb.collection('users').authWithOAuth2({ provider: 'microsoft' });
}

export function fetchData() {
    return pb.collection("users").subscribe("*", (data) => {
        console.log(data);
    })
}


