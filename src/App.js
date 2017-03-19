import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';


import Header from "./modules/shared/header";
import Home from "./modules/home";
import Login from "./modules/login";
import Staff from "./modules/staff";


class App extends Component {
  render(){
    return (
      <div>
        <div className="a-app">
              <Header></Header>
              <div classID="page-wrapper">
                  <div className="row"></div>
                  <Route exact path="/" component={Home}/>
                  <Route path="/login" component={Login}/>               
                  <Route path="/staff" component={Staff}></Route>                  
              </div>            
          </div>      
      </div>
    );
  }
}

export default App;
