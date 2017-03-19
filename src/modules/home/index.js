import React, { Component } from 'react';
import {connect} from "react-redux";

import FilmListing from "./film-listing";
import api from "../../utils";

class Home extends Component {
  componentDidMount(){
    if(this.props.films.length === 0)
      this.props.getFilmCatalog();
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

export default connect((state)=>{return state.home;},{getFilmCatalog})(Home);


//constants
export const UPDATE_FILM_CATALOG = "UPDATE_FILM_CATALOG";  

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

//reducers
let catalogState = {
    films:[],
    actors:[],
    isHome:false
};

export const home = function(state=catalogState, action){
    let newState = {...state};    
    switch(action.type){        
        case UPDATE_FILM_CATALOG:
          newState.films = action.data;
          break;        
        default:;
    }
    return newState;
}