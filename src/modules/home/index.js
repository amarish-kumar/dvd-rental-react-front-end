import React, { Component } from 'react';
import {connect} from "react-redux";

import FilmListing from "./film-listing";
import api from "../../utils";




//constants
export const UPDATE_FILM_CATALOG = "UPDATE_FILM_CATALOG";  
export const SET_HOME = "SET_HOME";  

//actions
export function getFilmCatalog(){
    return dispatch=>api.get("/film?limit=10")    
          .then(res=>{      
            return dispatch({
              type:UPDATE_FILM_CATALOG,
              data:res.data
            });
          })
          .catch(err=>console.error);
}

export function updateHome(isHome){
    return dispatch=>dispatch({
              type:SET_HOME,
              data:isHome
            });
}

//reducers
let catalogState = {
    films:[],
    actors:[],
    isHome:false
};

export const home = function(state=catalogState, action){
    let newState  = {...state};    
    switch(action.type){        
        case UPDATE_FILM_CATALOG:
          newState.films = action.data;
          break;        
        case SET_HOME:
          newState.isHome = action.data;
          break;        
        default:;
    }
    return newState;
}


//View
class Home extends Component {
  componentDidMount(){
    if(this.props.films.length === 0)
      this.props.getFilmCatalog();    
    this.props.updateHome(true);
  }

  componentWillUnmount(){
    this.props.updateHome(false);
  }

  render() {
    return (
      <div className="row">
          <div className="">
              <FilmListing films={this.props.films}></FilmListing>              
          </div>
      </div>
    );
  }
}

export default connect((state)=>{return state.home;},{getFilmCatalog,updateHome})(Home);

