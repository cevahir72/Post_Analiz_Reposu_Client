import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const initialState = {
    customers: [],
    loading: false
};


const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    clearCustomer: (state) => {
      state.customers = [];
    }    
//    extraReducers: {
//     [Register.pending]: (state, action) => {
//       state.loading = true;
//     },
    
//   }
}
});

export const { clearAuth, setUser,onChangeRegister } = customerSlice.actions;

export default customerSlice.reducer;