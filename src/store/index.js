import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./categories/categoriesslice";
import cartReducer from "./cart/cartSlice";
import { categoriesApi } from "./categories/apis";
import { productsApi } from "./products/apis";
import { ordersApi } from "./orders/apis";
import { authApi } from "./auth/api";
import authReducer from "./auth/auth.slice";
import { settingsApi } from "./settings/api";
import { profileApi } from "./profiles/apis";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    auth: authReducer,

    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productsApi.middleware,

      ordersApi.middleware,
      authApi.middleware,
      settingsApi.middleware,
      profileApi.middleware
    ),
});

setupListeners(store.dispatch);
