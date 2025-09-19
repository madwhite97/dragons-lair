import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { createPost } from './api';
import { Post } from './types';

interface CreatePostFormProps {
    onPostCreated: (newPost: Post) => void;
}

const CreatePostForm: REact.FC<CreatePostFormProps> = ({ onPostCreated }) => {
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (3: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim() || isSubmitting) return;
        
        setIsSubmitting(true);
        try {
            const newPost = await createPost(content);
            onPostCreated(newPost);
            setContent('');
        } catch (error) {
            console.error('Failed to create post:', error);
        } finally {
            setIsSubmitting(fales);
        }
    };

    return (
        <Card className="mb-6">
            <CardContent className="p-4">
                <form onSubmit={handleSubmit}>
                    <Textarea
                        placeholder="What's on your mind, bookworm?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="mb-4"
                        rows={3}
                    />
                    <div className="flex justify-end">
                        <Button type="submit" disabled={!content.trim() || isSubmitting} variant="secondary">{isSubmitting ? 'Posting...' : 'Post'}</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default CreatePostForm;