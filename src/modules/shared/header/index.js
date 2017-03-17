import React, {Component} from "react";
import Sidebar from "./sidebar";

class Header extends Component{
    state={loggedIn:false}
    render(){
        return <nav className="navbar navbar-default navbar-static-top" role="navigation" >
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">DVD Rental App</a>
                    </div>                            
                    <ul className="nav navbar-nav">
                        <li className="">
                            <a href="/"><i className="fa fa-home"></i></a>
                        </li>
                        <li className="">
                            <a href="/staff"><i className="fa fa-user"></i></a>
                        </li>
                    </ul>
                    <ul className="nav navbar-top-links navbar-right">            
                        <li className="" >
                            <a href="/login"><i className="fa fa-lock"></i></a>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user">
                                <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a></li>
                                <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a></li> -->
                                <li>
                                    <a href="/staff/stores">
                                        <i className="fa fa-square fa-fw"></i> Stores
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li><a href="#"><i className="fa fa-sign-out fa-fw"></i> Logout</a></li>
                            </ul>                            
                        </li>                        
                    </ul>                    
                    {this.state.loggedIn ? <Sidebar></Sidebar> : void 0}
                </nav>
    }
}
export default Header;