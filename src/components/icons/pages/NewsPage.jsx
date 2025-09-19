import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Event } from '@/features/events/types';
import { fetchEvents } from '@/features/events/api';
import EventCard from '@/features/events/EventCard';
import { NewsArticle } from '@/features/news/types';
import { fetchNews } from '@/features/news/api';
import NewsArticleCard from '@/features/news/NewsArticleCard';

const NewsPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const [fetchedEvents, fetchedNews] = await Promise.all([fetchEvents(), fetchNews(),
                ]);
                setEvents(fetchedEvents);
                setNews(fetchedNews);
                setError(null);
            } catch (err) {
                setError('Failed to load news and events. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-secondary">News & Events</h1>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {!loading && !error && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Latest News</h2>
                        <div className="space-y-6">
                            {news.map((article) => (
                                <NewsArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Local Events</h2>
                        <div className="space-y-6">
                            {events.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-8">
                <Link to="/" className="transition-transform hover:scale-105 order-last sm:order-first">
                    <img src="/assets/book-club-logo.png" alt="Dragon's Lair Book Club Logo" className="h-48 sm:h-72" />
                </Link>
                <div className="max-w-md text-right">
                    <blockquote className="text-lg italic text-muted-foreground border-r-4 border-secondary pr-4">
                        "I have been reading along with the rest of the world, and I'm not sorry."
                    </blockquote>
                    <p className="text-left mt-2 text-secondary font-medium self-end w-full text-right">- A paraphrased sentiment from the romantasy community</p>
                </div>
            </div>
        </div>
    );
};

export default Newspage;