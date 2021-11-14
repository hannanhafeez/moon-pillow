import React from 'react';
import ReactDOM from 'react-dom';

import './assets/fonts/DINPro-Regular.otf';
import './assets/fonts/DINPro-Medium.otf';
import './assets/fonts/DINPro-Bold.otf';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { queryClient } from "./services/QueryClient";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'


ReactDOM.render(
  <React.StrictMode>
		<QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
