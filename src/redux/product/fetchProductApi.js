import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import thunk from "redux-thunk";

// all product 
export const fetchAllProduct = createAsyncThunk(
  'product/AllProductApi',
  async (thunkApi) => {
    try {
      return await productService.getAllProduct();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// list product same code
export const fetchSameProduct = createAsyncThunk(
  'product/listSameProductApi',
  async (code) => {
    try {
      return await productService.getSameProducts(code);
    } catch (error) {
      return code.rejectWithValue(error);
    }
  }
);


// a product with id
export const fetchAProduct = createAsyncThunk(
  'product/productApi',
  async (thunkApi) => {
    try {
      return await productService.getAProduct();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const ressetProduct = createAsyncThunk(
  'product/productClear',
  async (thunkApi) => {
    try {
      let arrayProduct = [];
      return arrayProduct;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);





const productSlice = createSlice({
  name: "product",
  initialState: {
    isError: false,
    isLoading: false,
    isSuccess: false,
    product: [],
    message: "",
    
  },
  reducers: {
  },
  extraReducers:  (builder) =>  {
    builder

    // reset product
    .addCase(ressetProduct.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(ressetProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload;
    })
    // get all product
    .addCase(fetchAllProduct.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload.allproduct;
    })
    .addCase(fetchAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
    })
    //  get list product
    .addCase(fetchSameProduct.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchSameProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload.productCode;
    })
    .addCase(fetchSameProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
    })
    // get a product
    .addCase(fetchAProduct.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchAProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload;
    })
    .addCase(fetchAProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
    })
   
    
  },
});

export default productSlice;