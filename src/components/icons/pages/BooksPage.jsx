import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Book } from '@/features/books/types';
import { fetchTrendingBooks } from '@/features/books/api';
import BoodCard from '@/features/books/BookCard';

const BooksPage: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getBooks = async () => {
            try {
                setLoading(true);
                const TrendingBooks = await fetchTrendingBooks();
                setBooks(trendingBooks);
                setError(null);
            } catch (err) {
                setError('Failed to load books. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getBooks();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-secondary">Trending Books</h1>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            )}
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-8 gap-8">
                <div className="max-w-md">
                    <blockquote classname="text-lg italix text-muted-foreground border-l-1 border-secondary pl-4">"It's a dangerous business, Frodo, going out your door. YOu step onto hte road, and if you don't keep your feet, there's no knowing where you might be swept off to."</blockquote>
                    <p className="text-right mt-2 text-secondary font-medium">- J.R.R. Tolkien, The Lord of the Rings</p>
                </div>
                <Link to="/" className="transition-transform hover:scale-105">
                    <img src= "/assets/book-club-logo.png" alt="Dragon's Lair Book Club Logo" className="h-48 sm:h-72" />
                </Link>
            </div>
        </div>
    );
};

export default BooksPage