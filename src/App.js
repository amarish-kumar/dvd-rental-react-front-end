import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';


import Header from "./modules/shared/header";
import Home from "./modules/home";
import Login from "./modules/login";
import Staff from "./modules/staff";


class App extends Component {
  render(){
    let isHome = false;
    let loggedIn = true;
    return (
      <div>
        <div className="a-app">
              <Header></Header>
              <div id="page-wrapper" className={(isHome || (!isHome && !loggedIn)) ? "no-margin-left" : ""}>
                  <div className="row"></div>
                  <div className="row">
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>               
                    <Route path="/staff" component={Staff}></Route> 
                  </div>                                   
              </div>            
          </div>      
      </div>
    );
  }
}

export default App;
