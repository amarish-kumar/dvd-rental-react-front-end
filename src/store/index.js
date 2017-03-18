import {createStore, applyMiddleware} from 'redux';
import initialState from "./initial-state";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export default createStore(
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);