import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ROUTING
import { BrowserRouter } from 'react-router-dom';

// REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { combineReducers } from 'redux';
import reportWebVitals from './reportWebVitals';
import App from './App';

const initialState = {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const storeObj = createStore(
  reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
);

ReactDOM.render(
  <Provider store={storeObj}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
