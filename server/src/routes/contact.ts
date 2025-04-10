import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  console.log('Received contact message:', req.body);
  res.status(200).json({ message: 'Message received successfully' });
});

export default router;
