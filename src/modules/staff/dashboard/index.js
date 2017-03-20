import React, { Component } from 'react';
import { connect } from "react-redux";
import api from "../../../utils";


//constants
const UPDATE_CUSTOMER_COUNT     = "UPDATE_CUSTOMER_COUNT";
const UPDATE_TOTAL_PAYMENTS     = "UPDATE_TOTAL_PAYMENTS";
const UPDATE_INVENTORY_COUNT    = "UPDATE_INVENTORY_COUNT";
const UPDATE_LANGUAGE_COUNT     = "UPDATE_LANGUAGE_COUNT";
const UPDATE_TOP_MOVIES         = "UPDATE_TOP_MOVIES";

//state
const dashboardState = {
    customers:{count:null},
    payments:{sum:null},
    inventory:{count:null},
    language:{count:null},
    movies:{top:[]},
};

//reducer
export function dashboard(state = dashboardState, action){
    let newState  = {...state};    
    switch(action.type){        
        case UPDATE_CUSTOMER_COUNT:
          newState.customers.count = action.data;
          break;        
        case UPDATE_TOTAL_PAYMENTS:
          newState.payments.sum = action.data;
          break;        
        case UPDATE_INVENTORY_COUNT:
          newState.inventory.count = action.data;
          break;        
        case UPDATE_LANGUAGE_COUNT:
          newState.language.count = action.data;
          break;        
        case UPDATE_TOP_MOVIES:
          newState.movies.top = action.data;
          break;        
        default:;
    }
    return newState;
};


const actions ={
    getCustomerCount:()=>{
        return dispatch=>api.get("customer/count")    
          .then(res=>{                    
            return dispatch({
              type:UPDATE_CUSTOMER_COUNT,
              data:res.data
            });
          })
          .catch(err=>console.error);            
    },
    getTotalPayments:()=>{                 
        return dispatch=>api.get("payment/sum")    
          .then(res=>{      
            return dispatch({
              type:UPDATE_TOTAL_PAYMENTS,
              data:res.data
            });
          })
          .catch(err=>console.error);          
    },
    getTotalInventory:()=>{                 
        return dispatch=>api.get("inventory/count")    
          .then(res=>{      
            return dispatch({
              type:UPDATE_INVENTORY_COUNT,
              data:res.data
            });
          })
          .catch(err=>console.error);           
    },
    getTotalLanguages:()=>{                 
        return dispatch=>api.get("language/count")    
          .then(res=>{      
            return dispatch({
              type:UPDATE_LANGUAGE_COUNT,
              data:res.data
            });
          })
          .catch(err=>console.error);      
    },
    getTopMovies:()=>{       
        return dispatch=>api.get("topMoviesByRentals")    
          .then(res=>{      
            return dispatch({
              type:UPDATE_CUSTOMER_COUNT,
              data:res.body
            });
          })
          .catch(err=>console.error);     
    }
};

//View
class Dashboard extends Component {
    
    componentDidMount(){
        this.props.getCustomerCount();
        this.props.getTotalPayments();
        this.props.getTotalInventory();
        this.props.getTotalLanguages();
    }

    render() {        
        return <div className="container-fluid">
                    <div className="row">
                        <h1></h1>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-group fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">{this.props.dashboard.customers.count}</div>
                                            <div>Customers</div>
                                        </div>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-red">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-rupee fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">{this.props.dashboard.payments.sum}</div>
                                            <div>Payments</div>
                                        </div>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-green">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-server fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">{this.props.dashboard.inventory.count}</div>
                                            <div>Inventory</div>
                                        </div>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="panel panel-yellow">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-3">
                                            <i className="fa fa-language fa-5x"></i>
                                        </div>
                                        <div className="col-xs-9 text-right">
                                            <div className="huge">{this.props.dashboard.language.count}</div>
                                            <div>Languages</div>
                                        </div>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </div>                    
                </div>;
    }
}
export default connect((state) => state, actions)(Dashboard);


/*

<div className="row">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <i className="fa fa-bar-chart-o fa-fw"></i> Top movies
                            </div>                            
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12">                            
                                        <div v-if="topMovies && topMovies[0]" className="table">
                                            <table className="table table-bordered table-hover table-striped">
                                                <thead>
                                                    <tr>     
                                                        <th v-for="(field, i) in topMovies[1].fields">{{field.name}}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, i) in topMovies[0]">
                                                        <td v-for="(field, j) in topMovies[1].fields">{{item[field.name]}}</td>
                                                    </tr>                                        
                                                </tbody>
                                            </table>
                                        </div>                            
                                    </div>                        
                                </div>                    
                            </div>                
                        </div>
                    </div>*/