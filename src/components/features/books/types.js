export interface Book {
    id: number;
    title: string;
    author: string;
    cover_image_url: string | null;
    description: string | null;
    rating: number | null;
    created_at: String;
}