import React, {Component} from "react";

class Sidebar extends Component{
    render(){
    return <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">                
                        <li>
                            <a href="/staff/">
                                <i className="fa fa-dashboard fa-fw"></i> Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-folder-open fa-fw"></i> Manage <span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="/staff/actors">
                                        <i className="fa fa-child fa-fw"></i> Actors
                                    </a>
                                </li>
                                <li>
                                    <a href="/staff/films">
                                        <i className="fa fa-film fa-fw"></i> Films
                                    </a>
                                </li>
                                <li>
                                    <a href="/staff/categories">
                                        <i className="fa fa-address-book-o fa-fw"></i> Categories
                                    </a>
                                </li>                        
                                <li>
                                    <a href="/staff/customers">
                                        <i className="fa fa-group fa-fw"></i> Customers
                                    </a>
                                </li>
                                <li>
                                    <a href="/staff/addresses">
                                        <i className="fa fa-address-book-o fa-fw"></i> Address
                                    </a>
                                </li>
                                <li>
                                    <a href="/staff/inventory">
                                        <i className="fa fa-server fa-fw"></i> Invetory
                                    </a>
                                </li>
                                <li>
                                    <a href="/staff/rentals">
                                        <i className="fa fa-address-book-o fa-fw"></i> Rental
                                    </a>
                                </li>
                                <li>
                                    <a href="/staff/payments">
                                        <i className="fa fa-credit-card fa-fw"></i> Payment
                                    </a>
                                </li>                                                  
                            </ul>                            
                        </li>                
                    </ul>
                </div>                
            </div>;
    }
}

export default Sidebar;