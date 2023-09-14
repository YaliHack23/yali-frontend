
export type Post = {
    id: string;
    content: string;
    author: BaseUser;
    createdAt: Date;
    location: string;
}

export interface User extends BaseUser {
    email: string;
    phone: string;
    occupation: string;
    location: string;
    interests: string[];
    cohortID: string;
    createdAt: Date;
    updatedAt: Date;
    verified: boolean;
}

export type BaseUser = {
    id: string;
    name: string;
    username: string;
}

export type pagination = {
    first: number;
    last: number;
}
