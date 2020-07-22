import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, devToolsEnhancer } from 'redux-devtools-extension';
// import reducer from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const store = createStore(reducer, devToolsEnhancer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
