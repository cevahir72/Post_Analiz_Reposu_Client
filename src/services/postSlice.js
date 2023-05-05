import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const initialState = {
    posts: [],
    loading: false
};


const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.posts = [];
    }    
//    extraReducers: {
//     [Register.pending]: (state, action) => {
//       state.loading = true;
//     },
    
//   }
}
});

export const { clearAuth, setUser,onChangeRegister } = postSlice.actions;

export default postSlice.reducer;