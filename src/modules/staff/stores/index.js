import React, { Component } from 'react';
import { connect } from "react-redux";
import api from "../../../utils";

//constants
const GET_ALL_STORES     = "GET_ALL_STORES";


//state
const storesState = {
    stores:[]
};

//actions
const actions ={   
     
    getAllStores:(payload)=>{
        let include =[
                        {"model":"staff"}, 
                        {
                            "model":"address",
                            "include":[{
                                        "model":"city", 
                                        "include":["country"]
                                    }]
                        }
                    ]; 
        let where = {};
        let limit = payload.limit, offset = payload.offset;
        let url = `store?limit=${limit}&offset=${offset}&include=`+encodeURIComponent(JSON.stringify(include))+`&where=`+encodeURIComponent(JSON.stringify(where));   

        return dispatch=>api.get(url)    
          .then(res=>{                    
            return dispatch({
              type:GET_ALL_STORES,
              data:res.data
            });
          })
          .catch(err=>console.error)
       
    }
    
};


//reducer
export function stores(state = storesState, action){
    let newState  = {...state};    
    switch(action.type){        
        case GET_ALL_STORES:
          newState.stores = action.data;
          break;        
        default:;
    }
    return newState;
};

class Stores extends Component{
    limit=15;
    currentPage=0;
    onInteraction(dir){
        
        if(dir === "next")
            this.currentPage+=this.limit;
        else
            this.currentPage-=this.limit;

        this.currentPage = Math.max(this.currentPage, 0);
        this.props.getAllStores({limit:this.limit, offset:this.currentPage});

    }

    componentWillMount(){
        this.props.getAllStores({limit:this.limit, offset:this.currentPage});
    }

    render(){
        let {stores} = this.props;
        return <div className="row">
                    <div className="col-lg-12">
                        <h1></h1>
                        {stores.map((item, i)=><div key={i} className="panel panel-default">
                            <div className="panel-heading">Store {i+1}</div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4>Manager</h4>                            
                                        <form role="form" className="form">
                                            <div className="form-group">
                                                <label htmlFor="fName">First Name</label>
                                                <input id="fName" defaultValue={item.staff.first_name} className="form-control"/>
                                            </div>                                                            
                                            <div className="form-group">
                                                <label htmlFor="lName">Last Name</label>
                                                <input id="lName" defaultValue={item.staff.last_name} className="form-control"/> 
                                            </div>                                                            
                                            <div className="form-group">
                                                <label htmlFor="email">E-mail</label>
                                                <input id="email" defaultValue={item.staff.email} className="form-control"/> 
                                            </div>                                                            
                                        </form>                                
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>Address</h4>                            
                                        <form role="form" className="form">
                                            <div className="form-group">
                                                <label htmlFor="address">Location</label>
                                                <input id="address" defaultValue={item.address.address} className="form-control"/> 
                                            </div>  
                                            <div className="form-group">
                                                <label htmlFor="city">City</label>
                                                <input id="city" defaultValue={item.address.city.city} className="form-control"/> 
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="country">Country</label>
                                                <input id="country" defaultValue={item.address.city.country.country} className="form-control"/> 
                                            </div>                                                            
                                        </form>                                
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>;
    }
}
export default connect((state) => state.stores, actions)(Stores);