// Redux store
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './services/authSlice';
import answerSlice from './services/answerSlice';
import financingSlice from './services/financingSlice';
import productSlice from './services/productSlice';
import analysisSlice from './services/analysisSlice';
import profileSlice from './services/profileSlice';
import postSlice from './services/postSlice';
import adminSlice from './services/adminSlice';
import rivalSlice from './services/rivalSlice';

export const store = configureStore({
    reducer: {
      auth: authSlice,
      answer: answerSlice,
      financing: financingSlice,
      product :productSlice,
      analysis : analysisSlice,
      profile : profileSlice,
      post : postSlice,
      admin: adminSlice,
      rival : rivalSlice
    }
    
  });