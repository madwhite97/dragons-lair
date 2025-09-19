import express from 'express',
import { db } from '../db/database.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await db
            .selectFrom('posts')
            .innerJoin('users', 'users.id', 'posts.user_id')
            .select([
                'posts.id',
                'posts.content',
                'posts.created_at',
                'users.username',
                'users.avatar_url',
            ])
            .orderBy('posts.created_at', 'desc')
            .execute();
        res.json(posts);
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        res.status(500).json({ message: 'Failed to fetch posts' });
    }
});

router.post('/', async (req, res) => {
    const { content, userId } = req.body;

    if (!content || !userId) {
        res.status(400).json({ message: 'Content and userId are required' });
        return;
    }

    try {
        const newPost = await db
        .insertInto('posts')
        .values({ content, user_id: userId })
        .returningAll()
        .executeTakeFirstOrThrow();

        const postWithUser = await db
            .selectFrom('posts')
            .innerJoin('users', 'users.id', 'posts.user_id')
            .select([
                'posts.id',
                'posts.content',
                'posts.created_at',
                'users.username',
                'users.avatar_url',
            ])
            .where('posts.id', '=', newPost.id)
            .executeTakeFirstOrThrow();

        res.status(201).json(postWithUser);
    } catch (error) {
        console.error('Failed to create post:', error);
        res.status(500).json( { message: 'Failed to create post' });
    }
});

export default router;