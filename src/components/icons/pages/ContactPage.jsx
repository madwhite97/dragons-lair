import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<{type: 'success' | 'error' | 'idle'; message: string }>
    ({ type: 'idle', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setStatus({ type: 'error', message: 'Please fill out all fields.' });
            return;
        }
        setIsSubmitting(true);
        setStatus({ type: 'idle', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong.');
            }

            setStatus({ type: 'success', message: data.message });
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
            setStatus({ type: 'error', message: errorMessage });
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl text-center text-secondary">Contact Us</CardTitle>
                    <CardDescription className="text-center">Have a question or suggestion? Drop us a line!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />   
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Your message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                required
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto" variant="secondary">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                            {status.message && (
                                <p className={`mt-4 text-sm ${status.type === 'error' ? 'text-destructive' : 'text-green-500'}`}></p>
                            )}
                        </div>  
                    </form>               
                </CardContent>
            </Card>
        </div>
    );
};

export default ContactPage;