import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from 'services/apiSlices';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>
);
