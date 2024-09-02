// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB0yH6E9EuAUMM32_B9UwoBjkN7Ss0_0mU",
  authDomain: "antiv-ed826.firebaseapp.com",
  projectId: "antiv-ed826",
  storageBucket: "antiv-ed826.appspot.com",
  messagingSenderId: "894388676766",
  appId: "1:894388676766:web:66bc353d0e6fac36d6b38f",
  measurementId: "G-VTE96HJG64"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);