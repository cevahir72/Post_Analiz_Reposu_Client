import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const initialState = {
    products: [],
    loading: false
};


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.products = [];
    }    
//    extraReducers: {
//     [Register.pending]: (state, action) => {
//       state.loading = true;
//     },
    
//   }
}
});

export const { clearAuth, setUser,onChangeRegister } = productSlice.actions;

export default productSlice.reducer;