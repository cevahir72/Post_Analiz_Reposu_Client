import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';


const initialState = {
    user: {},
    loading: false
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = {};
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    onChangeRegister : (state,action)=>{
      state.user = {...state.user, [action.payload.name]: action.payload.value}
    },
    clearProducts : (state,action)=>{
      state.products = []
    }
},
extraReducers: {
 
}
});

export const { clearAuth, setUser,onChangeRegister} = authSlice.actions;

export default authSlice.reducer;