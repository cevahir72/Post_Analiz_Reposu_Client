import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorNote, successNote } from "../utils/ToastNotify";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const createPost = createAsyncThunk(
  "post/createPost",
  async (data, thunkAPI) => {
    const { post, setShow } = data;
    try {
      const resp = await axios.post(`${apiUrl}/posts`, post);
      if (resp.status === 200) {
        successNote(resp.data.message);
        setShow(false);
        return resp.data.data;
      }
    } catch (error) {
      errorNote("Error with create-post.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (data, thunkAPI) => {
    const { post, setShow } = data;
    try {
      const resp = await axios.put(
        `${apiUrl}/posts/${post._id}`,
        post
      );
      if (resp.status === 200) {
        successNote(resp.data.message);
        setShow(false);
        return resp.data.data;
      }
    } catch (error) {
      errorNote("Error with update-post.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.delete(
        `${apiUrl}/posts/${data._id}`
      );
      if (resp.status === 200) {
        successNote(resp.data.message);
        return resp.data.data;
      }
    } catch (error) {
      errorNote("Error with delete-post.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (data, thunkAPI) => {
    const {user} = data;
    try {
      const resp = await axios.get(`${apiUrl}/posts?user=${user}`);
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (error) {
      errorNote("Error with get-all-posts.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPost = createAsyncThunk(
  "post/getPost",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.get(
        `${apiUrl}/products/${data._id}`
      );
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (error) {
      errorNote("Error with get-one-post.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  posts: [],
  post: {},
  deleteLoading: false,
  updateLoading: false,
  createLoading: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.posts = [];
    },
    clearPost: (state, action) => {
      state.post = {};
    },
    onChangePost: (state, action) => {
      state.post = {
        ...state.post,
        [action.payload.name]: action.payload.value,
      };
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
  extraReducers: {
    [createPost.pending]: (state, action) => {
      state.createLoading = true;
    },
    [createPost.rejected]: (state, action) => {
      state.createLoading = false;
    },
    [createPost.fulfilled]: (state, action) => {
      state.createLoading = false;
      state.posts = [...state.posts, action.payload];
    },
    [updatePost.pending]: (state, action) => {
      state.updateLoading = true;
    },
    [updatePost.rejected]: (state, action) => {
      state.updateLoading = false;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.updateLoading = false;
      let updatedPosts = state.posts.filter(
        (item) => item._id !== action.payload._id
      );
      state.posts = [...updatedPosts, action.payload];
    },
    [deletePost.pending]: (state, action) => {
      state.deleteLoading = true;
    },
    [deletePost.rejected]: (state, action) => {
      state.deleteLoading = false;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.deleteLoading = false;
      state.posts = state.posts.filter(
        (item) => item._id !== action.payload._id
      );
    },
    [getAllPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllPosts.rejected]: (state, action) => {
      state.loading = false;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPost.pending]: (state, action) => {
      state.loading = true;
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload;
    },
  },
});

export const { clearPost, onChangePost, clearPosts, setPost } =
  postSlice.actions;

export default postSlice.reducer;
