import React, { Component } from 'react';


class Login extends Component {
    state={invalidMsg:"FIXME"}
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
                                    <a href="#" className="btn btn-lg btn-success btn-block">Login</a>
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
export default Login;
