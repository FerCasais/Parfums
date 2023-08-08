import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./categories/categoriesslice";
import cartReducer from "./cart/cartSlice";
import { categoriesApi } from "./categories/apis";
import { productsApi } from "./products/apis";
import { ordersApi } from "./orders/apis";








export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,

    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
   
 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productsApi.middleware,
      ordersApi.middleware,
    
     
      
    ),
});

setupListeners(store.dispatch);
