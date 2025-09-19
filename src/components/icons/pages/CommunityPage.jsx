import React, { useEffect, useState } from 'react';
import { Post } from '@/features/community/types';
import { fetchPosts } from '@/features/community/api';
import PostCard from '@/features/community/PostCard';
import CreatePostForm from '@/features/community/CreatePostForm';

const CommunityPage: React.FC = () => {
    const [posts, setPosts] = usetState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                setLoading(true);
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts);
                setError(null);
            } catch (err) {
                setError('Failed to load posts. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getPosts();
    }, []);

    const handlePostCreated = (newPost: Post) => {
        setPosts([newPost, ...posts]);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <h1 className="text-4xl font-bold mb-6 text-center text-secondary">Community Feed</h1>

            <CreatePostForm onPostCreated={handlePostCreated} />

            {loading && <p>Loading feed...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}       
        </div>
    );
};

export default CommunityPage;