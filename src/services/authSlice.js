import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import axios from "axios";

const initialState = {
    user: {},
    loading: false
};

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    const { userInfo, navigate } = data;
    try {
      const resp = await axios.post(`http://localhost:5000/api/auth/login`, userInfo);
      if (resp.status === 200) {
        localStorage.setItem('user', resp.data.username);
        successNote(resp.data.message);
        navigate("/post")
        return resp.data;
      }
    } catch (error) {
      errorNote("Error with login.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
  const { navigate } = data;
  await axios
    .post(`http://localhost:5000/api/auth/logout`, {
      username: localStorage.getItem('user')
    })
    .then(res => {
      if (res.status === 200) {
        localStorage.clear();
        navigate('/login');
        successNote(res.data.message);
      }
    })
    .catch(err => {
      navigate('/login');
      localStorage.clear();
      return thunkAPI.rejectWithValue('something went wrong');
    });
});


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    onChangeRegister : (state,action)=>{
      state.user = {...state.user, [action.payload.name]: action.payload.value}
    },
    clearUser : (state,action)=>{
      state.user = {};
    }
},
extraReducers: {
  [login.pending]: (state, action) => {
    state.loading = true;
  },
  [login.rejected]: (state, action) => {
    state.loading = false;
  },
  [login.fulfilled]: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
}
});

export const { clearAuth, setUser,onChangeRegister} = authSlice.actions;

export default authSlice.reducer;