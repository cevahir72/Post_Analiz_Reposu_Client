import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorNote, successNote } from '../utils/ToastNotify';
import axios from "axios";
// const apiUrl = process.env.API_URL;

export const createAnswer = createAsyncThunk('answer/createAnswer', async (data, thunkAPI) => {
  const {answer,setShow} = data;
try {
 const resp = await axios.post(`http://localhost:5000/api/answers` , answer)
  if(resp.status === 200) {
   successNote(resp.data.message);
   setShow(false);
   return resp.data.data;
  }    
} catch (error) {
errorNote('Error with create-answer.');
return thunkAPI.rejectWithValue(error.message);
}
});

export const updateAnswer = createAsyncThunk('answer/updateAnswer', async (data, thunkAPI) => {
 const {answer,setShow} = data;
try {
 const resp = await axios.put(`http://localhost:5000/api/answers/${answer._id}` , answer)
  if(resp.status === 200) {
   successNote(resp.data.message);
   setShow(false);
   return resp.data.data;
  }    
} catch (error) {
errorNote('Error with update-answer.');
return thunkAPI.rejectWithValue(error.message);
}
});

export const deleteAnswer = createAsyncThunk('answer/deleteAnswer', async (data, thunkAPI) => {

try {
 const resp = await axios.delete(`http://localhost:5000/api/answers/${data._id}` )
  if(resp.status === 200) {
   successNote(resp.data.message);
   return resp.data.data;
  }    
} catch (error) {
errorNote('Error with delete-answer.');
return thunkAPI.rejectWithValue(error.message);
}
});

export const getAllAnswers = createAsyncThunk('answer/getAllAnswers', async (data, thunkAPI) => {

try {
 const resp = await axios.get(`http://localhost:5000/api/answers?filterText=${data.filterText}`)
  if(resp.status === 200) {
   return resp.data;
  }    
} catch (error) {
errorNote('Error with get-all-answers.');
return thunkAPI.rejectWithValue(error.message);
}
});



const initialState = {
  answers: [],
  answer : {},
  deleteLoading: false,
  updateLoading : false,
  createLoading : false,
  loading: false
};



const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    clearAnswers: (state) => {
      state.answers = [];
    },
    clearAnswer: (state) => {
      state.answer = {};
    },
    onChangeAnswer: (state,action) => {
      state.answer = {...state.answer, [action.payload.name]: action.payload.value}
    }, 
    setAnswer : (state, action) => {
      state.answer = action.payload;
  },
},
   extraReducers: {
    [createAnswer.pending]: (state, action) => {
      state.createLoading = true;
    },
    [createAnswer.rejected]: (state, action) => {
      state.createLoading = false;
    },
    [createAnswer.fulfilled]: (state, action) => {
      state.createLoading = false;
      state.answers = [...state.answers,action.payload]
    },
    [updateAnswer.pending]: (state, action) => {
      state.updateLoading = true;
    },
    [updateAnswer.rejected]: (state, action) => {
      state.updateLoading = false;
    },
    [updateAnswer.fulfilled]: (state, action) => {
      state.updateLoading = false;
      let updatedAnswers = state.answers.filter(item=>item._id !== action.payload._id )
      state.answers = [...updatedAnswers, action.payload] 
    },
    [deleteAnswer.pending]: (state, action) => {
      state.deleteLoading = true;
    },
    [deleteAnswer.rejected]: (state, action) => {
      state.deleteLoading = false;
    },
    [deleteAnswer.fulfilled]: (state, action) => {
      state.deleteLoading = false;
      state.answers =  state.answers.filter(item=>item._id !== action.payload._id)
    },
    [getAllAnswers.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllAnswers.rejected]: (state, action) => {
      state.loading = false;
    },
    [getAllAnswers.fulfilled]: (state, action) => {
      state.loading = false;
      state.answers = action.payload;
    },
  }
});

export const { clearAnswers ,clearAnswer,onChangeAnswer,setAnswer} = answerSlice.actions;

export default answerSlice.reducer;