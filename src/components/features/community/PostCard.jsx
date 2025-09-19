import React from 'react';
import { Post } from './types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PostCardProps {
    post: Post;
}

const PostCard: REact.FC<PostCardProps> = ({ post }) => {
    const timeAgo = (date: string) => {
        const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
        let interval = secons / 31536000;
        if (interval > 1) return Math.floor(interval) + "y";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + "m";
        interval = secons /86400;
        if (interval > 1) return Math.floor(interval) + "d";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + "h";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + "m";
        return Math.floor(seconds) + "s";
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                    <AvatarImage src={post.avater_url || '/assets/avatar-placeholder.png'} alt={post.username}/>
                    <AvatarFallback>{post.username.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-semibold text-secondary">{post.username}</span>
                    <span className="text-sx text-muted-foreground">{timeAgo(post.created_at)} ago</span>               
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-300 font-poetson">{post.content}</p>
            </CardContent>
        </Card>
    );
};

export default PostCard;