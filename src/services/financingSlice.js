import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const initialState = {
    financing: [],
    loading: false
};


const financingSlice = createSlice({
  name: "financing",
  initialState,
  reducers: {
    clearFinancing: (state) => {
      state.financing = [];
    }    
}
});

export const { clearAuth, setUser,onChangeRegister } = financingSlice.actions;

export default financingSlice.reducer;