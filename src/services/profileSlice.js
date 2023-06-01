import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const initialState = {
    profile: {},
    loading: false
};


const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearSales: (state) => {
      state.profile = {};
    }    
},
   extraReducers: {    
  }
});

export const { clearAuth, setUser,onChangeRegister } = profileSlice.actions;

export default profileSlice.reducer;