import React, { Component } from 'react';
import { connect } from "react-redux";

import * as validator from 'validator';
import api from "../../utils";



//constants
export const INVALID_INPUTS = "INVALID_INPUTS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

//actions
export function doLogin(credentials) {
    return dispatch => api.post("login", credentials)
        .then(res => {
            return dispatch({
                type: LOGIN_SUCCESS,
                data: {
                    loggedIn:true,
                    auth: {
                        token: res.headers["authorization"],
                    },
                    user: res.data
                }
            });
        })
        .catch(err => console.error);
}

export function invalidInputs() {
    return dispatch => dispatch({
        type: INVALID_INPUTS,
        data: "Invalid inputs."
    });
}

//reducers
let loginState = {
    auth: { token: null },
    user: {},
    loginError: null,
    loggedIn:false
};

export const login = function (state = loginState, action) {
    let newState = { ...state };
    switch (action.type) {
        case INVALID_INPUTS:
            newState.loginError = action.data;
            break;
        case LOGIN_SUCCESS:
            newState = action.data;
            break;
        default: ;
    }
    return newState;
}

//View
class Login extends Component {
    onSubmit(evt) {
        evt.preventDefault();
        let form = this.refs["login-form"];
        let credentials = {
            username: form.querySelector("[name='username']").value,
            password: form.querySelector("[name='password']").value
        };
        let valid = validator.isLength(credentials.username, { min: 4, max: 16 }) &&
            validator.isAlphanumeric(credentials.username) && validator.isLength(credentials.password, { min: 6, max: 12 });

        if (valid)
            this.props.doLogin(credentials);
        else
            this.props.invalidInputs();
    }
    componentWillMount() {
        this.props.loggedIn && this.props.history.push("/staff");
    }
    componentDidUpdate() {
        this.props.loggedIn && this.props.history.push("/staff");
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Please Sign In</h3>
                        </div>
                        <div className="panel-body">
                            <form ref="login-form" role="form">
                                <fieldset>
                                    <div className="form-group">
                                        <input required className="form-control" placeholder="username" name="username" type="text" autoFocus />
                                    </div>
                                    <div className="form-group">
                                        <input required className="form-control" placeholder="Password" name="password" type="password" />
                                    </div>
                                    <a href="#" onClick={this.onSubmit.bind(this)} className="btn btn-lg btn-success btn-block">Login</a>
                                </fieldset>
                            </form>
                            {this.props.loginError ? <p className="alert alert-danger" >{this.props.loginError}</p> : void 0}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect((state) => state.login, { doLogin, invalidInputs })(Login);

