import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorNote} from "../utils/ToastNotify";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const mostSaledItems = createAsyncThunk(
  "analysis/mostSaledItems",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.get(`${apiUrl}/analysis`);
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (error) {
      errorNote("Error with get-all-answers.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const mostSaledLocations = createAsyncThunk(
  "analysis/mostSaledLocations",
  async (data, thunkAPI) => {
    const { location } = data
    try {
      const resp = await axios.get(`${apiUrl}/analysis/zip?location=${location ? location : "all"}`);
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (error) {
      errorNote("Error with get-all-answers.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  mostSaledProducts: [],
  mostSaledZipcodes: [],
  loading: false,
};

const analysisSlice = createSlice({
  name: "analysis",
  initialState,
  reducers: {
    clearAnalysis: (state) => {
      state.mostSaledProducts = [];
      state. mostSaledZipcodes = [];
    },
  },
  extraReducers: {
    [mostSaledItems.pending]: (state, action) => {
      state.loading = true;
    },
    [mostSaledItems.rejected]: (state, action) => {
      state.loading = false;
    },
    [mostSaledItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.mostSaledProducts = action.payload;
    },
    [mostSaledLocations.pending]: (state, action) => {
      state.loading = true;
    },
    [mostSaledLocations.rejected]: (state, action) => {
      state.loading = false;
    },
    [mostSaledLocations.fulfilled]: (state, action) => {
      state.loading = false;
      state.mostSaledZipcodes = action.payload;
    },
  },
});

export const { clearAnalysis } = analysisSlice.actions;

export default analysisSlice.reducer;
