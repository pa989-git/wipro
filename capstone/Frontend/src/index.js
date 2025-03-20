import React from "react";
import ReactDOM from "react-dom/client";
import {createRoot} from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store/store"; // ✅ Ensure this path is correct
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Custom styles
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
//const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
