import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorNote, successNote } from "../utils/ToastNotify";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const createSale = createAsyncThunk(
  "admin/createSale",
  async (data, thunkAPI) => {
    const { sale, setShow } = data;
    try {
      const resp = await axios.post(`${apiUrl}/admin`, sale);
      if (resp.status === 200) {
        successNote(resp.data.message);
        setShow(false);
        return resp.data.data;
      }
    } catch (error) {
      errorNote("Error with create-sale.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateSale = createAsyncThunk(
  "admin/updateSale",
  async (data, thunkAPI) => {
    const { sale, setShow } = data;
    try {
      const resp = await axios.put(
        `${apiUrl}/admin/${sale._id}`,
        sale
      );
      if (resp.status === 200) {
        successNote(resp.data.message);
        setShow(false);
        return resp.data.data;
      }
    } catch (error) {
      errorNote("Error with update-sale.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteSale = createAsyncThunk(
  "admin/deleteSale",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.delete(
        `${apiUrl}/admin/${data._id}`
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

export const getAllSales = createAsyncThunk(
  "admin/getAllSales",
  async (data, thunkAPI) => {
    const {user} = data;
    try {
      const resp = await axios.get(`${apiUrl}/admin?user=${user}`);
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (error) {
      errorNote("Error with get-all-sales.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllSalesProfile = createAsyncThunk(
    "admin/getAllSalesProfile",
    async (data, thunkAPI) => {
      const {id} = data;
      try {
        const resp = await axios.get(`${apiUrl}/admin/profile/${id}`);
        if (resp.status === 200) {
          return resp.data;
        }
      } catch (error) {
        errorNote("Error with get sales.");
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const getAllMyAdminSales = createAsyncThunk(
    "admin/getAllMyAdminSales",
    async (data, thunkAPI) => {
      try {
        const resp = await axios.get(`${apiUrl}/admin/mySales/1`);
        if (resp.status === 200) {
          return resp.data;
        }
      } catch (error) {
        errorNote("Error with get-all-my-admin-sales.");
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const getSale = createAsyncThunk(
  "admin/getSale",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.get(
        `${apiUrl}/admin/${data._id}`
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
  sales: [],
  adminSales: [],
  sale: {},
  deleteLoading: false,
  updateLoading: false,
  createLoading: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearSales: (state) => {
      state.sales = [];
      state.sale = {};
    },
    clearSale: (state, action) => {
        state.sale = {};
      },
    onChangeSale: (state, action) => {
        state.sale = {
          ...state.sale,
          [action.payload.name]: action.payload.value,
        };
      },
    setSale: (state, action) => {
        state.sale = action.payload;
      },
  },
  extraReducers: {
    [createSale.pending]: (state, action) => {
        state.createLoading = true;
      },
      [createSale.rejected]: (state, action) => {
        state.createLoading = false;
      },
      [createSale.fulfilled]: (state, action) => {
        state.createLoading = false;
        state.sales = [...state.sales, action.payload];
      },
      [updateSale.pending]: (state, action) => {
        state.updateLoading = true;
      },
      [updateSale.rejected]: (state, action) => {
        state.updateLoading = false;
      },
      [updateSale.fulfilled]: (state, action) => {
        state.updateLoading = false;
        let updatedSales = state.sales.filter(
          (item) => item._id !== action.payload._id
        );
        state.sales = [...updatedSales, action.payload];
      },
      [deleteSale.pending]: (state, action) => {
        state.deleteLoading = true;
      },
      [deleteSale.rejected]: (state, action) => {
        state.deleteLoading = false;
      },
      [deleteSale.fulfilled]: (state, action) => {
        state.deleteLoading = false;
        state.sales = state.sales.filter(
          (item) => item._id !== action.payload._id
        );
      },
      [getAllSales.pending]: (state, action) => {
        state.loading = true;
      },
      [getAllSales.rejected]: (state, action) => {
        state.loading = false;
      },
      [getAllSales.fulfilled]: (state, action) => {
        state.loading = false;
        state.sales = action.payload;
      },
      [getSale.pending]: (state, action) => {
        state.loading = true;
      },
      [getSale.rejected]: (state, action) => {
        state.loading = false;
      },
      [getSale.fulfilled]: (state, action) => {
        state.loading = false;
        state.sale = action.payload;
      },
      [getAllSalesProfile.fulfilled]: (state, action) => {
        state.loading = false;
        state.sales = action.payload;
      },
      [getAllMyAdminSales.pending]: (state, action) => {
        state.loading = true;
      },
      [getAllMyAdminSales.rejected]: (state, action) => {
        state.loading = false;
      },
      [getAllMyAdminSales.fulfilled]: (state, action) => {
        state.loading = false;
        state.adminSales = action.payload;
      },
  },
});

export const { setSale,onChangeSale,clearSale,clearSales } = adminSlice.actions;

export default adminSlice.reducer;