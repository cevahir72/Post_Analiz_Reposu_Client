// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export default firebaseUtil;

export const auth = getAuth(firebaseUtil);
