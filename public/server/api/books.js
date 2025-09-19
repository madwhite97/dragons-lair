import express from 'express';
import { db } from '../db/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await db.selectFrom('books').selectAll().orderBy('rating', 'desc').limit(6).execute();
        res.json(books);
    } catch (error) {
        console.error('Failed to fetch books:', error);
        res.status(500).json({ message: 'Failed to fetch books'});
    }
});

export default router;