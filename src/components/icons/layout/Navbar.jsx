import React, { useState } from 'react';
import { Navlink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Flame, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navLinkClasses = ({ isActive }: {isActive: boolean }) => {
        const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors';

        if (isActive) {
            return cn(baseClasses, 'bg-card-active text-secondary');
        }

        if (isHomePage) {
            return cn(baseClasses, 'text-muted-foreground hover:bg-muted hover:text-foreground');
        }

        return cn(baseClasses, 'text-muted-foreground hover:bg-muted hover:text-card-foreground');
    };

    return (
        <nav className="bg-card border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex items-center gap-2 text-lg font-bold text-gray-400">
                            <Flame className="h-8 w-8 text-destructive"/>
                        </NavLink>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink to="/books" className={NavLinkClasses}>Books</NavLink>
                        <NavLink to="/news" className={navLinkClasses}>News</NavLink>
                        <NavLink to="/shops" className={navLinkClasses}>Merch</NavLink>
                        <NavLink to="/community" className={navLinkClasses}>Community</NavLink>
                        <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
                    </div>
                    <div className="md:hidden flex items-center">
                        <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">{isMenuOpen ? <X className="h-6 2-6" /> : <Menu className="h-6 2-6" />}</Button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/books" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Books</NavLink>
                        <NavLink to="/news" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>News</NavLink>
                        <NavLink to="/shops" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Merch</NavLink>
                        <NavLink to="/community" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Community</NavLink>
                        <NavLink to="/contact" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;