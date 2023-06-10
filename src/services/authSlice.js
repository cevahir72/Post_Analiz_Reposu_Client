import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const initialState = {
    user: {},
    users: [],
    loading: false
};

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    const { userInfo, navigate } = data;
    try {
      const resp = await axios.post(`${apiUrl}/auth/login`, userInfo);
      if (resp.status === 200) {
        localStorage.setItem('user', resp.data.data._id);
        successNote(resp.data.message);
        navigate("/post")
        return resp.data.data;
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
    .post(`${apiUrl}/auth/logout`, {
      username: localStorage.clearItem('user')
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

export const getUser = createAsyncThunk('auth/getUser', async (data, thunkAPI) => {

  try {
      const resp = await axios.get(`${apiUrl}/users/${data}`)
       if(resp.status === 200) {
        return resp.data;
       }    
    } catch (error) {
    errorNote('Error with get-one-user.');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getUsers = createAsyncThunk('auth/getUsers', async (data, thunkAPI) => {

  try {
      const resp = await axios.get(`${apiUrl}/users`)
       if(resp.status === 200) {
        return resp.data;
       }    
    } catch (error) {
    errorNote('Error with get-all-users.');
    return thunkAPI.rejectWithValue(error.message);
  }
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
  [getUser.fulfilled]: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  [getUsers.fulfilled]: (state, action) => {
    state.loading = false;
    const usernames = action.payload.map(x=>x.username);
    state.users = usernames;
  }
}
});

export const { clearUser, setUser,onChangeRegister} = authSlice.actions;

export default authSlice.reducer;