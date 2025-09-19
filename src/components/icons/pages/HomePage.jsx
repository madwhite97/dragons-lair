
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Users, ShoppingBag, Music } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">Welcome to Dragon's Lair</h1>
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        Your sanctuary for all things Romantasy and Dark Romance. Discover trending books, connect with fellow readers, and find exclusive merch.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
          <Link to="/books">Explore Books</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/community">Join the Community</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <Link to="/books" className="flex flex-col items-center p-6 rounded-lg hover:bg-card transition-colors">
          <BookOpen className="w-12 h-12 text-secondary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Discover Reads</h3>
          <p className="text-muted-foreground">
            Find your next obsession from our curated list of trending books.
          </p>
        </Link>
        <Link to="/community" className="flex flex-col items-center p-6 rounded-lg hover:bg-card transition-colors">
          <Users className="w-12 h-12 text-secondary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Connect & Share</h3>
          <p className="text-muted-foreground">
            Join discussions, share theories, and connect with readers who get it.
          </p>
        </Link>
        <Link to="/shops" className="flex flex-col items-center p-6 rounded-lg hover:bg-card transition-colors">
          <ShoppingBag className="w-12 h-12 text-secondary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Exclusive Merch</h3>
          <p className="text-muted-foreground">
            Browse unique merchandise from your favorite authors and bookish shops.
          </p>
        </Link>
      </div>

      <div className="mt-16 border-t border-border pt-12">
        <h2 className="text-3xl font-bold mb-4 text-secondary">BookTok Vibes</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Listen to our curated playlist of songs that capture the mood of your favorite reads.
        </p>
        <Button asChild size="lg">
          <a href="https://open.spotify.com/playlist/37i9dQZF1DXc3KPAjGyPjM" target="_blank" rel="noopener noreferrer">
            <Music className="mr-2 h-5 w-5" />
            Listen on Spotify
          </a>
        </Button>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
        <div className="text-left max-w-md space-y-8">
          <div>
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-secondary pl-4">
              "To the stars who listen—and the dreams that are answered."
            </blockquote>
            <p className="text-right mt-2 text-secondary font-medium">- Sarah J. Maas, A Court of Mist and Fury</p>
          </div>
          <div>
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-secondary pl-4">
              "It is our choices, Harry, that show what we truly are, far more than our abilities."
            </blockquote>
            <p className="text-right mt-2 text-secondary font-medium">- J.K. Rowling, Harry Potter and the Chamber of Secrets</p>
          </div>
          <div>
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-secondary pl-4">
              "Not all those who wander are lost."
            </blockquote>
            <p className="text-right mt-2 text-secondary font-medium">- J.R.R. Tolkien, The Fellowship of the Ring</p>
          </div>
        </div>
        <div>
          <img src="/assets/book-club-logo.png" alt="Dragon's Lair Book Club Logo" className="h-72 sm:h-96 md:h-[28rem] mt-8 md:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;