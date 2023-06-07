// Redux store
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './services/authSlice';
import answerSlice from './services/answerSlice';
import financingSlice from './services/financingSlice';
import productSlice from './services/productSlice';
import analysisSlice from './services/analysisSlice';
import profileSlice from './services/profileSlice';
import postSlice from './services/postSlice';

export const store = configureStore({
    reducer: {
      auth: authSlice,
      answer: answerSlice,
      financing: financingSlice,
      product :productSlice,
      analysis : analysisSlice,
      profile : profileSlice,
      post : postSlice
    }
    
  });