import {combineReducers} from "redux";
import {login} from "../modules/login"
import {home} from "../modules/home";
import {dashboard} from "../modules/staff/dashboard";
import {actors} from "../modules/staff/actors";
import {films} from "../modules/staff/films";
import {customers} from "../modules/staff/customers";
import {categories} from "../modules/staff/categories";
import {addresses} from "../modules/staff/addresses";
import {inventory} from "../modules/staff/inventory";
import {rentals} from "../modules/staff/rentals";
import {payments} from "../modules/staff/payments";
import {stores} from "../modules/staff/stores";
//import {header} from "../modules/shared/header";


let combinedState = combineReducers({
    login,
    home,
    dashboard, 
    actors,
    films,
    customers,
    categories,
    addresses,
    inventory,
    rentals,
    payments,
    stores
});

export default combinedState;