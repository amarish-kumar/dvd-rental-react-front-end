import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Sidebar extends Component{
    render(){
    return <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">                
                        <li>
                            <Link to="/staff/">
                                <i className="fa fa-dashboard fa-fw"></i> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="#"><i className="fa fa-folder-open fa-fw"></i> Manage <span className="fa arrow"></span></Link>
                            <ul className="nav nav-second-level">
                                <li>
                                    <Link to="/staff/actors">
                                        <i className="fa fa-child fa-fw"></i> Actors
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/staff/films">
                                        <i className="fa fa-film fa-fw"></i> Films
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/staff/categories">
                                        <i className="fa fa-address-book-o fa-fw"></i> Categories
                                    </Link>
                                </li>                        
                                <li>
                                    <Link to="/staff/customers">
                                        <i className="fa fa-group fa-fw"></i> Customers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/staff/addresses">
                                        <i className="fa fa-address-book-o fa-fw"></i> Address
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/staff/inventory">
                                        <i className="fa fa-server fa-fw"></i> Invetory
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/staff/rentals">
                                        <i className="fa fa-address-book-o fa-fw"></i> Rental
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/staff/payments">
                                        <i className="fa fa-credit-card fa-fw"></i> Payment
                                    </Link>
                                </li>                                                  
                            </ul>                            
                        </li>                
                    </ul>
                </div>                
            </div>;
    }
}

export default Sidebar;