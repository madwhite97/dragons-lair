export interface NewsArticle {
    id: number;
    title: string;
    content: string | null;
    source: string | null;
    article_url: string | null;
    image_url: string | null;
    published_at: string;
    created_at: string;
}