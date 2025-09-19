import React, { useEffect, useState } from 'react';
import { Shop } from '@/features/shops/types';
import { fetchShops } from '@/features/shops/api';
import ShopCard from '@/features/shops/ShopCard';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ShopsPage: React.FC = () => {
    const [shops, setShops] = useState<Shop[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getShops = async () => {
            try {
                setLoading(true);
                const fetchedShops = await fetchShops();
                setShops(fetchedShops);
                setError(null);
            } catch (err) {
                setError('Failed to load shops. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getShops();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-secondary">Merch</h1>
                <p className="text-muted-foreground mt-2">A collection of bookish shops we love.</p>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{errpr}</p>}
            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {shops.map((shop) => (
                        <ShopCard key={shop.id} shop={shop} />
                    ))}
                </div>
            )}

            <Card className="mt-12 bg-card-active border-secondary">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 p-6">
                        <img src="/assets/tshirt-mockup.png" alt="Dragon's Lair T-Shirt" className="2-full h-auto object-cover rounded-md" />
                    </div>
                    <div className="md:w-2/3 p-6 text-center md:text-left">
                        <CardHeader className="p-0 mb-2">
                            <CardTitle classname="text-xl font-poetson text-primary">Official Dragon's Lair T-Shirt</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mb-4">
                            <p className="text-sm text-gray-300">Show your love for the lair with our exclusive, ultra-soft cotton t-shirt.</p>
                        </CardContent>
                        <CardFooter classname="p-0 flex justify-center md:justify-start">
                            <Button asChild size="sm">
                                <a href="#">Buy Now</a>
                            </Button>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ShopsPages;