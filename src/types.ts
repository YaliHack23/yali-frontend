
export type Post = {
    id: string;
    content: string;
    authorID: string;
    author?: BaseUser;
    createdAt: Date;
    location: string;
    tagIDs: string[];
    tags?: Tag[];
}

export type Tag = {
    id: string;
    name: string;
}

export interface User extends BaseUser {
    email: string;
    phone: string;
    occupation: string;
    location: string;
    interests: string[];
    cohortID: string;
    cohort?: Cohort;
    track?: Track;
    trackID: string;
    createdAt: Date;
    updatedAt: Date;
    verified: boolean;
}

export type Cohort = {
    id: string;
    name: string;
}

export type Track = {
    id: string;
    name: string;
}

export type BaseUser = {
    id: string;
    name: string;
    username: string;
    avatar: string;
}

export type pagination = {
    first: number;
    last: number;
}
