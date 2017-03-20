import React, { Component } from 'react';
import { connect } from "react-redux";
import api from "../../../utils";

import Grid from "../../shared/grid";

//constants
const GET_ALL_ADDRESSES     = "GET_ALL_ADDRESSES";


//state
const addressesState = {
    addresses:[]
};

//actions
const actions ={   
     
    getAllAddresses:(payload)=>{
        let include =[{model:"city",include:["country"]}];       
        let where = {};
        let limit = payload.limit, offset = payload.offset;
        let url = `address?limit=${limit}&offset=${offset}&include=`+encodeURIComponent(JSON.stringify(include))+`&where=`+encodeURIComponent(JSON.stringify(where));   

        return dispatch=>api.get(url)    
          .then(res=>{                    
            return dispatch({
              type:GET_ALL_ADDRESSES,
              data:res.data
            });
          })
          .catch(err=>console.error)
       
    }
    
};


//reducer
export function addresses(state = addressesState, action){
    let newState  = {...state};    
    switch(action.type){        
        case GET_ALL_ADDRESSES:            
          newState.addresses = action.data;
          break;        
        default:;
    }
    return newState;
};

class Addresses extends Component{
    limit=15;
    currentPage=0;
    onInteraction(dir){
        
        if(dir === "next")
            this.currentPage+=this.limit;
        else
            this.currentPage-=this.limit;

        this.currentPage = Math.max(this.currentPage, 0);
        this.props.getAllAddresses({limit:this.limit, offset:this.currentPage});

    }

    componentWillMount(){
        this.props.getAllAddresses({limit:this.limit, offset:this.currentPage});
    }

    render(){
        return <div className="row">
                    <div className="col-lg-12">
                        <h1>Addresses</h1>
                        <Grid 
                            limit={this.limit} 
                            currentPage={this.currentPage} 
                            onInteract={this.onInteraction.bind(this)}
                            data={this.props.addresses}></Grid>
                    </div>
               </div>;
    }
}
export default connect((state) => state.addresses, actions)(Addresses);