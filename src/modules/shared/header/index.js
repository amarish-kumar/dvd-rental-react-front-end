import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Sidebar from "./sidebar";
import {doLogout} from "../../login";

//constants


//state
let headerState = {};


//reducer
export function header(state = headerState, action){    
    let newState = {...state};    
    switch (action.type) {            
        default: ;
    }
    return newState;
}

//view
class Header extends Component{    
    onLogoutClick(evt){        
        evt.preventDefault();
        evt.stopPropagation();
        this.props.doLogout();
    }
    render(){

        let login = this.props.login;    
        let home = this.props.home;    
        let loggedIn = login.loggedIn === true;
        let isHome = home.isHome;

        return <nav className="navbar navbar-default navbar-static-top" role="navigation" >
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">DVD Rental App</Link>
                    </div>                            
                    <ul className="nav navbar-nav">
                        <li className="">
                            <Link to="/"><i className="fa fa-home"></i></Link>
                        </li>
                        {loggedIn && isHome ? <li className="">
                            <Link to="/staff"><i className="fa fa-user"></i></Link>
                        </li> : void 0}
                    </ul>
                    <ul className="nav navbar-top-links navbar-right">            
                        {!loggedIn && isHome ? <li className="" >
                            <Link to="/login"><i className="fa fa-lock"></i></Link>
                        </li> : void 0}
                        {loggedIn && !isHome ? <li className="dropdown">
                            <Link className="dropdown-toggle" data-toggle="dropdown" to="#">
                                <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                            </Link>
                            <ul className="dropdown-menu dropdown-user">
                                <li>
                                    <Link to="#"><i className="fa fa-user fa-fw"></i> User Profile</Link>
                                </li>                                
                                <li>
                                    <Link to="/staff/stores">
                                        <i className="fa fa-square fa-fw"></i> Stores
                                    </Link>
                                </li>
                                <li className="divider"></li>
                                <li><a href="#" onClick={this.onLogoutClick.bind(this)}><i className="fa fa-sign-out fa-fw"></i> Logout</a></li>
                            </ul>                            
                        </li> : void 0}                      
                    </ul>                    
                    {loggedIn && !isHome ? <Sidebar></Sidebar> : void 0}
                </nav>
    }
}
export default connect((state)=>state,{doLogout})(Header);