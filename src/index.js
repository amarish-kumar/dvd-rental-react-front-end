import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import appStore from "./store";

ReactDOM.render(
  <HashRouter>
    <Provider store={appStore}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
