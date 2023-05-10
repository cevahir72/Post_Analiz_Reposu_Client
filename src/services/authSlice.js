import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getFirestore,
  collection,
  serverTimestamp,
  addDoc,
  getDocs,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8e89Y1QAHRF0BsJLssdeiLWKamnJ35Es",
  authDomain: "ornate-7361b.firebaseapp.com",
  databaseURL: "https://ornate-7361b-default-rtdb.firebaseio.com",
  projectId: "ornate-7361b",
  storageBucket: "ornate-7361b.appspot.com",
  messagingSenderId: "800456840216",
  appId: "1:800456840216:web:93bef2a3a7dd38e7671f6d",
  measurementId: "G-4048Q0E0QV"
};

// Initialize Firebase
const firebaseUtil = initializeApp(firebaseConfig);
const auth = getAuth(firebaseUtil);
const db = getFirestore(firebaseUtil);

const initialState = {
    products : [],
    user: {},
    loading: false
};

export const SignIn = createAsyncThunk('firebase/register', async (userData, thunkAPI) => {
    const {email, password} = userData
    
    try {
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=> {
            //Signed in
            successNote("Registration Successfull!")
            return userCredential.user;
        }) 
      } catch (error) {
      errorNote(`Hata: ${error}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  });


  export const Log_in = createAsyncThunk('firebase/register', async (userData, thunkAPI) => {
    const {userInfo,navigate} = userData
    try {
        signInWithEmailAndPassword(auth,userInfo.email,userInfo.password)
        .then((userCredential)=> {
            //Signed in
            successNote("Signed In!")
            navigate("/post");
            return userCredential.user;  
        }) 
   
      } catch (error) {
      localStorage.clear();
      errorNote('Oturumunuz sona erdi. Lütfen tekrar giriş yapınız.');
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const addProduct = createAsyncThunk('product/add', async (data, thunkAPI) => {
     console.log(data)
    try {
        const product = await addDoc(collection,(db,"product"), {
           title: data.title,
           dimensions: data.dimensions,
           price: data.price,
           photoUrl: data.Url,
           type: data.type
        });
        successNote(`Product added!`)
        return product;

      } catch (error) {
      errorNote('Error with adding product!');
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const getProducts = createAsyncThunk('product/get', async (data, thunkAPI) => {
    try {
        console.log("getProducts")
        const result = await getDocs(collection,(db,"product"))
          result.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          return result;
        });
       
      } catch (error) {
      errorNote('Error with getting product!');
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
      state.user = {...state.user, [action.payload.name]: action.payload.value}
    },
    clearProducts : (state,action)=>{
      state.products = []
    },
   extraReducers: {
    [SignIn.pending]: (state, action) => {
      state.loading = true;
    },
    [SignIn.rejected]: (state, action) => {
      state.loading = false;
    },
    [SignIn.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [Log_in.pending]: (state, action) => {
      state.loading = true;
    },
    [Log_in.rejected]: (state, action) => {
      state.loading = false;
      errorNote("Email veya şifre yanlış!")
    },
    [Log_in.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("user", action.payload);
      state.user = action.payload;
    },
    [addProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [addProduct.rejected]: (state, action) => {
      state.loading = false;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    },
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
  }
}
});

export const { clearAuth, setUser,onChangeRegister,clearProducts } = authSlice.actions;

export default authSlice.reducer;