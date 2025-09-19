import express from 'express';
import { db } from '../db/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const shops = await db.selectFrom('shops').selectAll().orderBy('name', 'asc').execute();
        res.json(shops);
    } catch (error) {
        console.error('Failed to fetch shops:', error);
        res.status(500).json({ message: 'Failed to fetch shops' });
    }
});

export default router;