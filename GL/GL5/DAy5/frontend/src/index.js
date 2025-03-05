
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Root />
    </Provider>
);
