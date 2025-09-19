import { Book } from './types';

export async function fetchTrendingBooks():Promise<Book[]> {
    const response = await fetch('/api/books');
    if (!response.ok) {
        throw new Error('Failed to fetch trending books');
    }
    return response.json();
}