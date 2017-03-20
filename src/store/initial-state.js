import {combineReducers} from "redux";
import {login} from "../modules/login"
import {home} from "../modules/home";
import {dashboard} from "../modules/staff/dashboard";
import {actors} from "../modules/staff/actors";
import {films} from "../modules/staff/films";
import {customers} from "../modules/staff/customers";
import {categories} from "../modules/staff/categories";
import {addresses} from "../modules/staff/addresses";
//import {header} from "../modules/shared/header";


let combinedState = combineReducers({
    login,
    home,
    dashboard, 
    actors,
    films,
    customers,
    categories,
    addresses
});

export default combinedState;