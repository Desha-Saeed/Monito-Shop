import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../store';

//types
type CartItem = {
  _id: string;
  name: string;
  image: string;
  price: number;
  InStock: number;
  quantity: number;
};

//items in storage
const cartItemsFromStorage: CartItem[] = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems')!)
  : [];

//initial state with items in storage
const initialState = {
  cart: { cartItems: cartItemsFromStorage }
};

//fetch product then add it to cart state
export const fetchCartProduct = createAsyncThunk(
  'cartProduct/fetch',
  async ({ id, quantity }: { id: string; quantity: number }, thunkApi) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);

      const state = thunkApi.getState() as RootState;

      //dispatch add to cart action
      thunkApi.dispatch(
        addToCart({
          _id: data.data.product._id,
          name: data.data.product.name,
          image: data.data.product.image,
          price: data.data.product.price,
          InStock: data.data.product.InStock,
          quantity
        })
      );

      //set item in local storage
      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartslice.cart.cartItems)
      );
    } catch (error) {
      console.log(error);
    }
  }
);

//cart slice
export const cartSlice = createSlice({
  name: 'cartslice',
  initialState,
  reducers: {
    //add items to cart
    addToCart(state, { payload }: PayloadAction<CartItem>) {
      const item = payload;

      const existItem = state.cart.cartItems.find((p) => p._id === item._id);

      if (existItem) {
        payload.quantity++;
      } else {
        state.cart.cartItems.push(payload);
      }
    }
  }
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
