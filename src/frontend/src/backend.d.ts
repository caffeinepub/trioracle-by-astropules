import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Post {
    id: bigint;
    title: string;
    content: string;
    date: bigint;
    author: string;
    category: PostCategory;
}
export enum PostCategory {
    notice = "notice",
    blog = "blog"
}
export interface backendInterface {
    createPost(username: string, password: string, title: string, content: string, author: string, category: PostCategory): Promise<void>;
    deletePost(username: string, password: string, id: bigint): Promise<void>;
    getAllPosts(): Promise<Array<Post>>;
    getPost(id: bigint): Promise<Post>;
    getPostsByCategory(category: PostCategory): Promise<Array<Post>>;
    updatePost(username: string, password: string, id: bigint, title: string, content: string, author: string, category: PostCategory): Promise<void>;
}
