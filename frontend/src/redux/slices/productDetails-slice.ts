import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

//types
type Product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  InStock: number;
  avgRating: number;
  numReviews: number;
  quantity: number;
};

type productDetailsState = {
  status: 'loading' | 'idle';
  error: string | null;
  productDetails: Product;
};
//inital state
const initialState: productDetailsState = {
  status: 'idle',
  error: null,
  productDetails: {} as Product
};

//redux thunk function
export const fetchProductById = createAsyncThunk(
  'productDetails/fetchById',

  async (id: string) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);

      return data.data.product;
    } catch (error) {
      return error;
    }
  }
);

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {},
  extraReducers(builder) {
    //pending request
    builder.addCase(fetchProductById.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    //fulfilled request
    builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
      state.productDetails = payload;

      state.status = 'idle';
    });
    //rejected request
    builder.addCase(fetchProductById.rejected, (state) => {
      state.error = 'error in api request';
      state.status = 'idle';
    });
  }
});

export const selectProduct = (state: RootState) =>
  state.productDetails.productDetails;

export const productDetailsReducer = productDetailsSlice.reducer;
