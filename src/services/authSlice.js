import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const initialState = {
    user:{},
    loading: false
};

export const Register = createAsyncThunk('firebase/register', async (userData, thunkAPI) => {
    const {email, password} = userData
    const auth = getAuth()
    try {
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=> {
            //Signed in
            successNote("Signed In!")
            return userCredential.user;
        }) 
      } catch (error) {
      errorNote('Oturumunuz sona erdi. Lütfen tekrar giriş yapınız.');
      return thunkAPI.rejectWithValue(error.message);
    }
  });


  export const Login = createAsyncThunk('firebase/register', async (userData, thunkAPI) => {
    const {email, password} = userData
    const auth = getAuth()
    try {
        
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=> {
            //Signed in
            successNote("Signed In!")
            return userCredential.user;
            
        }) 
   
      } catch (error) {
      localStorage.clear();
      errorNote('Oturumunuz sona erdi. Lütfen tekrar giriş yapınız.');
      return thunkAPI.rejectWithValue(error.message);
    }
  });


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
      // state.user = {...state.user, [action.payload.name]: action.payload.value}
      console.log(action.payload )
    },
   extraReducers: {
    [Register.pending]: (state, action) => {
      state.loading = true;
    },
    [Register.rejected]: (state, action) => {
      state.loading = true;
    },
    [Register.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [Login.pending]: (state, action) => {
      state.loading = true;
    },
    [Login.rejected]: (state, action) => {
      state.loading = true;
      errorNote("Email veya şifre yanlış!")
    },
    [Login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("user", action.payload);
      state.user = action.payload;
    },
  }
}
});

export const { clearAuth, setUser,onChangeRegister } = authSlice.actions;

export default authSlice.reducer;