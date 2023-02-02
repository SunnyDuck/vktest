import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {recentSmilesAddFunc} from "./state";
import App from './App';


export let rerenderEntireTree = (store) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App store={store} recentSmilesAddFunc={recentSmilesAddFunc}/>
        </React.StrictMode>
    );
}
