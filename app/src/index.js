import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import {Provider} from 'react-redux';

import App from './App';
 import {reducer } from './reducers//kanyeRedcuer'

const store = createStore(reducer, applyMiddleware(logger, thunk));



ReactDOM.render(
  <React.StrictMode>
 <Provider store = {store}>
    <App />

    </Provider>
    </React.StrictMode>,
  
  document.getElementById('root')
);
