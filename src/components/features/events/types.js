export interface Event {
    id: number;
    name: string;
    description: string | null;
    location: string;
    date: string;
    image_url: string | null;
    created_at: string;
}