import { Router } from 'express';
import { Artist } from '../types';

const router = Router();

let artists: Artist[] = [];

export const setArtists = (data: Artist[]) => {
  artists = data;
};

router.get('/', (req, res) => {
  res.json(artists);
});

export default router;
