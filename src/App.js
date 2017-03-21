import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route,Switch,withRouter } from 'react-router-dom';

import './App.css';


import Header from "./modules/shared/header";
import Home from "./modules/home";
import Login from "./modules/login";
import Staff from "./modules/staff";


class App extends Component {
  render(){
    
    let login = this.props.login;    
    let home = this.props.home;    
    let loggedIn = login.loggedIn === true;
    let isHome = home.isHome;

    return (
      <div>
        <div className="a-app">
              <Header></Header>
              <div id="page-wrapper" className={(isHome || (!isHome && !loggedIn)) ? "no-margin-left" : ""}>
                  <div className="row"></div>
                  <div className="row">
                    <Switch>
                      <Route exact={true} path="/" component={Home}/>
                      <Route path="/login" component={Login}/>               
                      <Route path="/staff" component={Staff}></Route> 
                    </Switch>
                  </div>                                   
              </div>            
          </div>      
      </div>
    );
  }
}

export default withRouter(connect(state=>state)(App));
