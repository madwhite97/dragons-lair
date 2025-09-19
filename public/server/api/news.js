import express from 'express';
import { db } from '../db/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const newsArticles = await db.selectFrom('news_articles').selectAll().orderBy('published_at', 'desc').execute();
        res.json(newsArticles);
    } catch (error) {
        console.error('Failed to fetch news articles:', error);
        res.status(500).json({ message: 'Failed to fetch news articles' });
    }
});

export default router;