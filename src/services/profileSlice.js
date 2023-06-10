import {  createSlice } from '@reduxjs/toolkit';



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