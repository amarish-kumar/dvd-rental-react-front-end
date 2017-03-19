import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import appStore from "./store";
import api from "./utils";

//inject appStore into api utils, so that auth headers can be added to all requests..
//not sure if there is better way, but this works without anyside effects because, we are just reading the token..
api.init(appStore);

ReactDOM.render(
  <HashRouter>
    <Provider store={appStore}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
