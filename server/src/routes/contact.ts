import express from 'express';
import ContactMessage from '../models/ContactMessage';

const router = express.Router();

// POST /contact – save a new contact form message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    res.json({ message: 'Message received successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save message', error });
  }
});

export default router;
