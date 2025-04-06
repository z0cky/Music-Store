import express from 'express';
import musicData from '../data/musicStoreData.json';
import { Product, Artist } from '../types';

const router = express.Router();

const products: Product[] = musicData.products;
const artists: Artist[] = musicData.artists;

router.get('/products', (req, res) => {
  res.json(products);
});

router.get('/artists', (req, res) => {
  res.json(artists);
});

export default router;
