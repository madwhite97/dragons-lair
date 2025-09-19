import express from 'express';
import { db } from '../db/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const events = await db.selectFrom('events').selectAll().orderBy('date', 'asc').execute();
        res.json(events);
    } catch (error) {
        console.error('Failed to fetch events:', error);
        res.status(500).json({ message: 'Failed to fetch events' });
    }
});

export default router;