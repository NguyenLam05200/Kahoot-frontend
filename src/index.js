import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './containers/app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import "./i18n";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider
        autoHideDuration={6000}
        maxSnack={10}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
