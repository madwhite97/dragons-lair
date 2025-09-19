import express from 'express';
import dotenv from 'dotenv';
import { setupStaticServing } from './static-serve.js';
import booksRouter from './api/books.js';
import shopsRouter from './api/shops.js';
import postsRouter from './api/posts.js';
import contactRouter from './api/contact.js';
import eventsRouter from './api/events.js';
import newsRouter from './api/news.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/books', booksRouter);
app.use('/api/shops', shopsRouter);
app.use('/api/posts', postsRouter);
app.use('/api/contact', contactRouter);
app.use('/api/events', eventsRouter);
app.use('/api/news', newsRouter);

export async function startServer(port) {
    try {
        if (process.env.NODE_ENV === 'production') {
            setupStaticServing(app);
        }
        app.listen(port, () => {
            console.log(`API Server running on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
}

if (import.meta.url === `file://${process.argv[1]}`) {
    console.log('Starting server...');
    startServer(process.envPORT || 3001);
}