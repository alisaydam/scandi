import { configureStore } from "@reduxjs/toolkit";
import { productsReduces } from "../hooks/userProducts";

export const store = configureStore({
  reducer: {
    products: productsReduces,
  },
});
