import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "typeface-lato";
import { GlobalStyle } from "./GlobalStyle";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme } from "./theme";
import { addTask } from "./features/tasks/tasksSlice";
import store from "./store";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
