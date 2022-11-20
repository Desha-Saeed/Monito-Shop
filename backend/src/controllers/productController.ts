import products from '../utils/products';
import { Response, Request } from 'express';

//get all products
export const getProducts = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: {
      products
    }
  });
};

//get single product
export const getProduct = (req: Request, res: Response) => {
  const { id } = req.params;

  const product = products.find((p) => p._id === id);

  res.status(200).json({
    status: 'success',
    data: {
      product
    }
  });
};
