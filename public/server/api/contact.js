import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        res.status(400).json({ message: 'Name, email, and message are required' });
        return;
    }

    console.log('--- New Contact Form Submission---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('------------------------------------');

    res.status(200).json({ message: 'Your message has been sent successfully!' });
});

export default router;