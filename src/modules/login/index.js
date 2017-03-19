import React, { Component } from 'react';
import {connect} from "react-redux";
import api from "../../utils";

class Login extends Component {
    state={invalidMsg:"FIXME"}    
    onSubmit(evt){
        evt.preventDefault();
        //this.props.doLogin();
        this.props.forceLogin();
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
                                        <input required className="form-control" placeholder="username" name="username" type="text" autoFocus/>
                                    </div>
                                    <div className="form-group">
                                        <input required className="form-control" placeholder="Password" name="password" type="password" value=""/>
                                    </div>                            
                                    <a href="#" onClick={this.onSubmit.bind(this)} className="btn btn-lg btn-success btn-block">Login</a>
                                </fieldset>
                            </form>
                            <p className="alert alert-danger" >{this.state.invalidMsg}</p>
                        </div>
                    </div>
                </div>
            </div>
            );
  }
}
export default connect((state)=>state.login,{doLogin, forceLogin})(Login);

//constants
export const FORCE_LOGIN = "FORCE_LOGIN";  

//actions
export function doLogin(){
    return dispatch=>api.get("/film");
}

export function forceLogin(){
    return dispatch=>dispatch({
        type:FORCE_LOGIN,
        data:{
           auth: {
                token:"==TOKEN=",
            },
            uer:{
                name:"JK",
                id:1        
            }
        }
    });
}

//reducers
let loginState = {
    auth:{token:null},
    user:{},
    loginError:null
};

export const login = function(state=loginState, action){
    let newState = {...state};
    switch(action.type){
        case FORCE_LOGIN:
            newState = action.data;
            break;
        default: ;
    }
    return newState;
}

