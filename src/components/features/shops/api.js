import { Shop } from './types';

export async function fetchShops(): Promise<Shop[]> {
    const response = await fetch('/api/shops');
    if (!response.ok) {
        throw new Error('Failed to fetch shops');
    }
    return response.json();
}