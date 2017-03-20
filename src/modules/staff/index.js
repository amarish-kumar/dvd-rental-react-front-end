import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./dashboard";
import Actors from "./actors";

class Staff extends Component {
    componentWillMount() {
        !this.props.login.loggedIn && this.props.history.push("/login");
    }
    render() {
        return <div className="col-lg-12">                
                <Switch>
                    <Route exact={true} path="/staff/" component={Dashboard}></Route>
                    <Route path="/staff/actors" component={Actors}></Route>
                </Switch>
            </div>;
    }
}
export default connect(state=>state)(Staff);
