import { Router, Request, Response } from 'express';
import { getProduct, getProducts } from '../controllers/productController';

const productsRoutes = Router();

productsRoutes.get('/', getProducts);
productsRoutes.get('/:id', getProduct);

export default productsRoutes;
