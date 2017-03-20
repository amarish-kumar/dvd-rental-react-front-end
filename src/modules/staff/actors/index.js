import React, { Component } from 'react';
import { connect } from "react-redux";
import api from "../../../utils";

import Grid from "../../shared/grid";

//constants
const GET_ALL_ACTORS     = "GET_ALL_ACTORS";


//state
const acttorsState = {
    actors:[],
    page:0,
    limit:15
};

//actions
const actions ={   
     
    getAllActors:(payload)=>{
        let include =[];        
        let where = {};
        let limit = payload.limit, offset = payload.offset;
        let url = `actor?limit=${limit}&offset=${offset}&include=`+encodeURIComponent(JSON.stringify(include))+`&where=`+encodeURIComponent(JSON.stringify(where));   

        return dispatch=>api.get(url)    
          .then(res=>{                    
            return dispatch({
              type:GET_ALL_ACTORS,
              data:res.data
            });
          })
          .catch(err=>console.error)
       
    }
    
};


//reducer
export function actors(state = acttorsState, action){
    let newState  = {...state};    
    switch(action.type){        
        case GET_ALL_ACTORS:
          newState.actors = action.data;
          break;        
        default:;
    }
    return newState;
};

class Actors extends Component{
    
    componentWillMount(){
        this.props.getAllActors({limit:15, offset:0});
    }

    render(){
        return <div className="row">
                    <div className="col-lg-12">
                        <h1>Actors</h1>
                        <Grid 
                            limit={this.props.limit} 
                            currentPage={this.props.page} 
                            onInteract="onInteraction" 
                            data={this.props.actors}></Grid>
                    </div>
               </div>;
    }
}
export default connect((state) => state.actors, actions)(Actors);