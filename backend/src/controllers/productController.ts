import { Product } from '../models';
import { Response, Request } from 'express';
import asyncHandler from 'express-async-handler';

// @desc    fetch all products
// @route   GET /api/products
// @access  Public

export const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find();

  res.status(200).json({
    status: 'success',
    data: {
      products
    }
  });
});

// @desc     fetch a single product
// @route    GET /api/products/:id
// @access   Public
export const getProduct = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  res.status(200).json({
    status: 'success',
    data: {
      product
    }
  });
});
