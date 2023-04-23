import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ThemeProvider} from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { theme } from './theme';
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state/index";

const store = configureStore({
  reducer: {cart: cartReducer},
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
     <ThemeProvider theme={theme}>
       <CssBaseline/>
       <App/>
     </ThemeProvider>
   </Provider>
  </React.StrictMode>,
)
