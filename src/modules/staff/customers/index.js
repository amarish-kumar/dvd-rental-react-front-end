import React, { Component } from 'react';
import { connect } from "react-redux";
import api from "../../../utils";

import Grid from "../../shared/grid";

//constants
const GET_ALL_CUSTOMERS     = "GET_ALL_CUSTOMERS";


//state
const customersState = {
    customers:[]
};

//actions
const actions ={   
     
    getAllCustomers:(payload)=>{
        let include =[];        
        let where = {};
        let limit = payload.limit, offset = payload.offset;
        let url = `customer?limit=${limit}&offset=${offset}&include=`+encodeURIComponent(JSON.stringify(include))+`&where=`+encodeURIComponent(JSON.stringify(where));   

        return dispatch=>api.get(url)    
          .then(res=>{                    
            return dispatch({
              type:GET_ALL_CUSTOMERS,
              data:res.data
            });
          })
          .catch(err=>console.error)
       
    }
    
};


//reducer
export function customers(state = customersState, action){
    let newState  = {...state};    
    switch(action.type){        
        case GET_ALL_CUSTOMERS:
          newState.customers = action.data;
          break;        
        default:;
    }
    return newState;
};

class Customers extends Component{
    limit=15;
    currentPage=0;
    onInteraction(dir){
        
        if(dir === "next")
            this.currentPage+=this.limit;
        else
            this.currentPage-=this.limit;

        this.currentPage = Math.max(this.currentPage, 0);
        this.props.getAllCustomers({limit:this.limit, offset:this.currentPage});

    }

    componentWillMount(){
        this.props.getAllCustomers({limit:this.limit, offset:this.currentPage});
    }

    render(){
        return <div className="row">
                    <div className="col-lg-12">
                        <h1>Customers</h1>
                        <Grid 
                            limit={this.limit} 
                            currentPage={this.currentPage} 
                            onInteract={this.onInteraction.bind(this)}
                            data={this.props.customers}></Grid>
                    </div>
               </div>;
    }
}
export default connect((state) => state.customers, actions)(Customers);