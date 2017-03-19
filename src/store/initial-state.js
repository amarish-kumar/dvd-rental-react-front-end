import {combineReducers} from "redux";
import {login} from "../modules/login"
import {home} from "../modules/home"


let combinedState = combineReducers({
    login,
    home
});

export default combinedState;