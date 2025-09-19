import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreadsIcon from '@/components/icons/ThreadsIcon';

const Footer: React.FC = () => {
    return (
        <footer className="py-4 mt-auto border-t border-border">
            <div className="container mx-auto px-4 flex justify-center items-center gap-2">
                <Button asChild variant="ghost" size="icon">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram className="h-6 2-6 text-muted-foreground hover:text-foreground transition-colors"/>
                    </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                    <a href="https://threads.net" target="_blank" rel="noopener noreferrer" aria-label="Threads">
                        <ThreadsIcon className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors"/>
                    </a>
                </Button>
            </div>
        </footer>
    );
};

export default Footer;