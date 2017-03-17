import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Sidebar from "./sidebar";

class Header extends Component{
    state={
        loggedIn:false
    }
    render(){
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
                        <li className="">
                            <Link to="/staff"><i className="fa fa-user"></i></Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-top-links navbar-right">            
                        <li className="" >
                            <Link to="/login"><i className="fa fa-lock"></i></Link>
                        </li>
                        <li className="dropdown">
                            <Link className="dropdown-toggle" data-toggle="dropdown" to="#">
                                <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                            </Link>
                            <ul className="dropdown-menu dropdown-user">
                                <li>
                                    <Link to="#"><i className="fa fa-user fa-fw"></i> User Profile</Link>
                                </li>
                                <li><Link to="#"><i className="fa fa-gear fa-fw"></i> Settings</Link></li>
                                <li>
                                    <Link to="/staff/stores">
                                        <i className="fa fa-square fa-fw"></i> Stores
                                    </Link>
                                </li>
                                <li className="divider"></li>
                                <li><Link to="#"><i className="fa fa-sign-out fa-fw"></i> Logout</Link></li>
                            </ul>                            
                        </li>                        
                    </ul>                    
                    {this.state.loggedIn ? <Sidebar></Sidebar> : void 0}
                </nav>
    }
}
export default Header;