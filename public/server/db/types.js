import type { ColumnType, Generated } from "kysely";

export type Timestamp = ColumnType<Date, Date | String, Date | string>;

export interface Books {
    id: Generated<number>;
    title: String;
    author: String;
    cover_image_url: string | null;
    description: string | null;
    rating: number | null;
    created_at: Generated<Timestamp>;
}

export interface Shops {
    id: Generated<number>;
    name: string;
    description: string | null;
    url: string;
    image_url: string | null;
    created_at: Generated<Timestamp>;
}

export interface Users {
    id: Generated<number>;
    username: string;
    avatar_url: string | null;
    created_at: Generated<Timestamp>;
}

export interface Posts {
    id: Generated<number>;
    content: string;
    user_id: number;
    created_at: Generated<Timestamp>;
}

export interface Events {
    id: Generated<number>;
    name: string;
    description: string | null;
    location: string;
    date: Timestamp;
    image_url: string | null;
    created_at: Generated<Timestamp>;
}

export interface NewsArticles {
    id: Generated<number>;
    title: String;
    content: string | null;
    source: string | null;
    article_url: string | null;
    image_url: string | null;
    published_at: Timestamp;
    created_at: Generated<Timestamp>;
}

export interface DB {
    books: Books;
    shops: Shops;
    users: Users;
    posts: Posts;
    events: Events;
    news_articles: NewsArticles;
}