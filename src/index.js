import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBXvnhKrgrWYkKoFTVNTlctDWDJmSSfSpI",
  authDomain: "online-gaming-app-63cb8.firebaseapp.com",
  projectId: "online-gaming-app-63cb8",
  storageBucket: "online-gaming-app-63cb8.appspot.com",
  messagingSenderId: "221894195346",
  appId: "1:221894195346:web:729f3e8db2b37cdefa0e4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
