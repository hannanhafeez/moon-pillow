import React from 'react';
import ReactDOM from 'react-dom';

import './assets/fonts/D-DIN-PRO-400-Regular.otf';
import './assets/fonts/D-DIN-PRO-500-Medium.otf';
import './assets/fonts/D-DIN-PRO-600-SemiBold.otf';
import './assets/fonts/D-DIN-PRO-700-Bold.otf';
import './assets/fonts/D-DIN-PRO-800-ExtraBold.otf';
import './assets/fonts/D-DIN-PRO-900-Heavy.otf';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
