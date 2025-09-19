import React from 'react';
import { Shop } from './types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ShopCardProps {
    shop: Shop;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="font-poetson text-gray-300">{shop.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <img src={shop.image_url || '/assets/book-cover-placeholder.png'} alt={`Logo for ${shop.name}`} className="w-full h-40 object-cover rounded-md mb-4"/>
                <p className="text-sm text-muted-foreground">{shop.description}</p>
            </CardContent>
            <CardFooter>
                <Button asChild variant="outline" className="w-full">
                    <a href={shop.url} target="_blank" rel="noopener noreferrer">
                        Visit Shop
                        <ExternalLink className="ml-2 h-4 w-4"/>
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ShopCard;