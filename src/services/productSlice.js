import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import axios from "axios"
// const apiUrl = process.env.API_URL;


export const createProduct = createAsyncThunk('product/createProduct', async (data, thunkAPI) => {
       const {product,setShow} = data;
  try {
      const resp = await axios.post(`http://localhost:5000/api/products` , product)
       if(resp.status === 200) {
        successNote(resp.data.message);
        setShow(false);
        return resp.data.data;
       }    
    } catch (error) {
    errorNote('Error with create-product.');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateProduct = createAsyncThunk('product/updateProduct', async (data, thunkAPI) => {
      const {product,setShow} = data;
  try {
      const resp = await axios.put(`http://localhost:5000/api/products/${product._id}` , product)
       if(resp.status === 200) {
        successNote(resp.data.message);
        setShow(false);
        return resp.data.data;
       }    
    } catch (error) {
    errorNote('Error with update-product.');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (data, thunkAPI) => {

  try {
      const resp = await axios.delete(`http://localhost:5000/api/products/${data._id}` )
       if(resp.status === 200) {
        successNote(resp.data.message);
        return resp.data.data;
       }    
    } catch (error) {
    errorNote('Error with delete-product.');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getAllProducts = createAsyncThunk('product/getAllProducts', async (data, thunkAPI) => {

  try {
      const resp = await axios.get(`http://localhost:5000/api/products?filterText=${data.filterText}`)
       if(resp.status === 200) {
        return resp.data;
       }    
    } catch (error) {
    errorNote('Error with get-all-products.');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getProduct = createAsyncThunk('product/getProduct', async (data, thunkAPI) => {

  try {
      const resp = await axios.get(`http://localhost:5000/api/products/${data._id}`)
       if(resp.status === 200) {
        return resp.data;
       }    
    } catch (error) {
    errorNote('Error with get-one-product.');
    return thunkAPI.rejectWithValue(error.message);
  }
});


const initialState = {
    products: [],
    product: {},
    deleteLoading: false,
    updateLoading : false,
    createLoading : false,
    loading: false
};


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProducts: (state, action) => {
      state.products = [];
    },
    clearProduct: (state, action) => {
      state.product = {};
    },
    onChangeProduct: (state,action) => {
        state.product = {...state.product, [action.payload.name]: action.payload.value}
    }, 
    setProduct : (state, action) => {
        state.product = action.payload;
    },
    },
    extraReducers: {
    [createProduct.pending]: (state, action) => {
      state.createLoading = true;
    },
    [createProduct.rejected]: (state, action) => {
      state.createLoading = false;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.createLoading = false;
      state.products = [...state.products,action.payload]
    },
    [updateProduct.pending]: (state, action) => {
      state.updateLoading = true;
    },
    [updateProduct.rejected]: (state, action) => {
      state.updateLoading = false;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.updateLoading = false;
      let updatedProducts = state.products.filter(item=>item._id !== action.payload._id )
      state.products = [...updatedProducts, action.payload] 
    },
    [deleteProduct.pending]: (state, action) => {
      state.deleteLoading = true;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.deleteLoading = false;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.deleteLoading = false;
      state.products =  state.products.filter(item=>item._id !== action.payload._id)
    },
    [getAllProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.loading = false;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    
  }
});

export const { clearProduct,clearProducts,onChangeProduct,setProduct } = productSlice.actions;

export default productSlice.reducer;