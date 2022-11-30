import { configureStore } from '@reduxjs/toolkit';

import { productListReducer } from './slices/productList-slice';
import { productDetailsReducer } from './slices/productDetails-slice';
import { cartReducer } from './slices/cart-slice';

export const store = configureStore({
  reducer: {
    cartslice: cartReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
