import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Dashboard from "./dashboard";
import Actors from "./actors";
import Films from "./films";
import Customers from "./customers";
import Categories from "./categories";
import Addresses from "./addresses";
import Inventory from "./inventory";
import Rentals from "./rentals";
import Payments from "./payments";
import Stores from "./stores";

class Staff extends Component {
    
    render() {
        return <div className="col-lg-12">                
                {
                    this.props.login.loggedIn ? (<Switch>
                                                    <Route exact={true} path="/staff" component={Dashboard}></Route>
                                                    <Route path="/staff/actors" component={Actors}></Route>
                                                    <Route path="/staff/films" component={Films}></Route>
                                                    <Route path="/staff/addresses" component={Addresses}></Route>
                                                    <Route path="/staff/categories" component={Categories}></Route>
                                                    <Route path="/staff/customers" component={Customers}></Route>
                                                    <Route path="/staff/inventory" component={Inventory}></Route>
                                                    <Route path="/staff/rentals" component={Rentals}></Route>
                                                    <Route path="/staff/payments" component={Payments}></Route>
                                                    <Route path="/staff/stores" component={Stores}></Route>
                                                </Switch>) : <Redirect to="/login"/>
                }
            </div>;
    }
}
export default withRouter(connect(state=>state)(Staff));
