import express from 'express';
import Artist from '../models/Artist'

const router = express.Router();

// GET /artists
router.get('/', async (req, res) => {
  try {
    const artists = await Artist.find(); // get all artists from MongoDB
    res.json(artists);
  } catch (error) {
    console.error('Error fetching artists:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
