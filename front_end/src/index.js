import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { getProduct } from './Store/action';
import Reducer from './Store/Reducer';
import thunk from 'redux-thunk';
import {HelmetProvider} from 'react-helmet-async'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(Reducer ,composeEnhancers(applyMiddleware(thunk)) )
 //store.subscribe(()=>console.log('stat'+store.getState()))

//  //DISPATCH

  //  store.dispatch(getProduct())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <HelmetProvider>
        <App />
        </HelmetProvider>
      
      </Provider>
    
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
