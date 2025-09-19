import React from 'react';
import { NewsArticle } from './types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface NewsArticleCardProps {
    atricle: NewsArticle;
}

const NewsArticleCard: React.FC<NewsArticleCardProps> = ({ article }) => {
    const formattedDate = new Date(article.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <Card className="flex flex-col">
            <div>
                <img src={article.image_url || './assets/book-cover-placeholder.png'} alt={article.title} className="w-full h-48 object-cover rounded-t-xl"/>
            </div>
            <div className="flex flex-col justify-between p-6 flex-grow">
                <div>
                    <CardHeader classname="p-0 mb-2">
                        <CardTitle className="text-gray-300">{article.title}</CardTitle>
                        <CardDescription>{article.source} - {formattedDate}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mb-4">
                        <p className="text-sm text-muted-foreground">{article.content}</p>
                    </CardContent>
                </div>
                {article.article_url && (
                    <CardFooter className="p-0 mt-auto">
                        <Button asChild variant="outline" size="sm">
                            <a href={article.article_url} target="_blank" rel="noopener noreferrer">Read More
                                <ExternalLink className="ml-2 h-4 w-4"/>
                            </a>
                        </Button>
                    </CardFooter>
                )}
            </div>
        </Card>
    );
};

export deafult NewsArticleCard;