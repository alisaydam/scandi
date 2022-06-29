import { useQuery, gql } from "@apollo/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GET_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        id
        name
        brand
        inStock
        gallery
        prices {
          amount
          currency {
            symbol
            label
          }
        }
        attributes {
          type
          name
          items {
            value
            displayValue
            id
          }
        }
      }
    }
  }
`;

const useProducts = () => {
  const { error, loading, data } = useQuery(GET_PRODUCTS);

  return {
    error,
    data,
    loading,
  };
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await useProducts();
    console.log(res);
    return res;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "lodaing",
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, () => {
      return {
        products: [],
        status: "loading",
      };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action);
      return {
        products: [1, 2, 3],
        status: "success",
      };
    });
    builder.addCase(fetchProducts.rejected, (state, err) => {
      console.log(err);
      return {
        products: [],
        status: "error",
      };
    });
  },
});

export const productsReduces = productSlice.reducer;
