import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const initialState = {
    sales: [],
    loading: false
};


const analysisSlice = createSlice({
  name: "analysis",
  initialState,
  reducers: {
    clearSales: (state) => {
      state.sales = [];
    } 
},
   extraReducers: {
  }
});

export const { clearAuth, setUser,onChangeRegister } = analysisSlice.actions;

export default analysisSlice.reducer;