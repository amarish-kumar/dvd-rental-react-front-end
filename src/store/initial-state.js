import {combineReducers} from "redux";
import {login} from "../modules/login"
import {home} from "../modules/home";
import {dashboard} from "../modules/staff/dashboard";


let combinedState = combineReducers({
    login,
    home,
    dashboard
});

export default combinedState;