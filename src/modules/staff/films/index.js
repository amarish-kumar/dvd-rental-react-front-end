import React, { Component } from 'react';
import { connect } from "react-redux";
import api from "../../../utils";

import Grid from "../../shared/grid";

//constants
const GET_ALL_FILMS     = "GET_ALL_FILMS";


//state
const acttorsState = {
    films:[]
};

//actions
const actions ={   
     
    getAllFilms:(payload)=>{
        let include =[];        
        let where = {};
        let limit = payload.limit, offset = payload.offset;
        let url = `film?limit=${limit}&offset=${offset}&include=`+encodeURIComponent(JSON.stringify(include))+`&where=`+encodeURIComponent(JSON.stringify(where));   

        return dispatch=>api.get(url)    
          .then(res=>{                    
            return dispatch({
              type:GET_ALL_FILMS,
              data:res.data
            });
          })
          .catch(err=>console.error)
       
    }
    
};


//reducer
export function films(state = acttorsState, action){
    let newState  = {...state};    
    switch(action.type){        
        case GET_ALL_FILMS:
          newState.films = action.data;
          break;        
        default:;
    }
    return newState;
};

class Films extends Component{
    limit=15;
    currentPage=0;
    onInteraction(dir){
        
        if(dir === "next")
            this.currentPage+=this.limit;
        else
            this.currentPage-=this.limit;

        this.currentPage = Math.max(this.currentPage, 0);
        this.props.getAllFilms({limit:this.limit, offset:this.currentPage});

    }

    componentWillMount(){
        this.props.getAllFilms({limit:this.limit, offset:this.currentPage});
    }

    render(){
        return <div className="row">
                    <div className="col-lg-12">
                        <h1>Films</h1>
                        <Grid 
                            limit={this.limit} 
                            currentPage={this.currentPage} 
                            onInteract={this.onInteraction.bind(this)}
                            data={this.props.films}></Grid>
                    </div>
               </div>;
    }
}
export default connect((state) => state.films, actions)(Films);