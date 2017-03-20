import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from "./dashboard";
import Actors from "./actors";
import Films from "./films";
import Customers from "./customers";
import Categories from "./categories";
import Addresses from "./addresses";

class Staff extends Component {
    componentWillMount() {
        !this.props.login.loggedIn && this.props.history.push("/login");
    }
    render() {
        return <div className="col-lg-12">                
                {
                    this.props.login.loggedIn ? (<Switch>
                                                    <Route exact={true} path="/staff/" component={Dashboard}></Route>
                                                    <Route path="/staff/actors" component={Actors}></Route>
                                                    <Route path="/staff/films" component={Films}></Route>
                                                    <Route path="/staff/addresses" component={Addresses}></Route>
                                                    <Route path="/staff/categories" component={Categories}></Route>
                                                    <Route path="/staff/customers" component={Customers}></Route>
                                                    <Route path="/staff/inventory" component={Actors}></Route>
                                                    <Route path="/staff/rentals" component={Actors}></Route>
                                                    <Route path="/staff/payments" component={Actors}></Route>
                                                    <Route path="/staff/stores" component={Actors}></Route>
                                                </Switch>) : <Redirect to="/login"/>
                }
            </div>;
    }
}
export default connect(state=>state)(Staff);
