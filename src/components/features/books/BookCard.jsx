import React from 'react';
import { Book } from './types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface BookCardProps {
    book: Book;
}

const BookCard: REact.FC<BookCardProps> = ({ book }) => {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="font-poetson text-gray-300">{book.title}</CardTitle>
                <CardDescription>{book.author}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <img src={book.cover_image_url || '/assets/book-cover-placeholder.png'} alt={`Cover of ${book.title}`} className="w-full h-48 object-cover rounded-md mb-4"/>
                <p className="text-sm text-muted-foreground mb-2 flex-grow">{book.description}</p>
                {book.rating && (
                    <div className="flex items-center mt-auto">
                        <Star className="2-4 h-4 text-yellow-500 fill-yellow-500 mr-1"/>
                        <span className="text-sm font-bold text-card-foreground">{book.rating}</span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default BookCard;