import {combineReducers} from "redux";
import {login} from "../modules/login"


let combinedState = combineReducers({
    login
});

export default combinedState;