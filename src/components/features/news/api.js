import { NewsArticle } from './types';

export async function fetchNews():Promise<NewsArticle[]> {
    const response = await fetch('/api/news');
    if (!response.ok) {
        throw new Error('Failed to fetch news');
    }
    return response.json();
}