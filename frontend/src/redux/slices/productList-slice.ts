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

type productListState = {
  status: 'loading' | 'idle';
  error: string | null;
  productsList: Product[];
};
//inital state
const initialState: productListState = {
  status: 'idle',
  error: null,
  productsList: []
};

//redux thunk function
export const fetchProductList = createAsyncThunk(
  'productsList/fetch',
  async () => {
    try {
      const { data } = await axios.get('/api/products');

      return data.data.products;
    } catch (error) {
      console.log(error);
    }
  }
);

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    //pending request
    builder.addCase(fetchProductList.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    //fulfilled request
    builder.addCase(fetchProductList.fulfilled, (state, { payload }) => {
      state.productsList = payload;

      state.status = 'idle';
    });
    //rejected request
    builder.addCase(fetchProductList.rejected, (state, { payload }) => {
      state.error = 'error from api';
      state.status = 'idle';
    });
  }
});

export const selectProducts = (state: RootState) =>
  state.productList.productsList;

export const productListReducer = productListSlice.reducer;
