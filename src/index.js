import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {FireBaseContext} from "./context/firebaseContext";
import Firebase from "./services/firebase";


ReactDOM.render(
    <FireBaseContext.Provider  value={new Firebase()}><BrowserRouter><App /></BrowserRouter></FireBaseContext.Provider>
    ,
  document.getElementById('root')
);
