import {combineReducers} from "redux";
import {login} from "../modules/login"
import {home} from "../modules/home";
import {dashboard} from "../modules/staff/dashboard";
import {actors} from "../modules/staff/actors";
//import {header} from "../modules/shared/header";


let combinedState = combineReducers({
    login,
    home,
    dashboard, 
    actors,
});

export default combinedState;