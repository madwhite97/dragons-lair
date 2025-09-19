import React from 'react';
import { Event } from './types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
        year: 'numberic',
        month: 'long',
        day: 'numberic',
        hour: 'numeric',
        minute: '2-digit',
    });

    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="text-gray-300">{event.name}</CardTitle>
            </CardHeader>
            <CardContent className="felx-grow flex flex-col">
                <img src={event.image_url || '/assets/book-cover-placeholder.png'} alt={`Image for ${event.name}`} className="2-full h-40 object-cover rounded-md mb-4"/>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{event.decription}</p>
                <div className="mt-auto space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <Calendar className="2-4 h-4 text-foreground"/>
                        <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="2-4 h-4 text-foreground"/>
                        <span>{event.location}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default EventCard;