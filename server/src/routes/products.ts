import { Router } from 'express';
import { Product } from '../types';

const router = Router();

let products: Product[] = [];

export const setProducts = (data: Product[]) => {
  products = data;
};

router.get('/', (req, res) => {
  res.json(products);
});

export default router;
