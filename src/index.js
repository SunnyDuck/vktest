import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from './render'
import store from "./state";

rerenderEntireTree(store);

reportWebVitals();
