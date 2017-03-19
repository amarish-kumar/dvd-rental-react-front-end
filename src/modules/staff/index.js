import React, { Component } from 'react';
import browserHistory from 'react-router-dom';

import Dashboard from "./dashboard";
class Staff extends Component {
    render() {
        return <div className="col-lg-12">
            <Dashboard history={this.props.history}></Dashboard>
        </div>;
    }
}
export default Staff;
