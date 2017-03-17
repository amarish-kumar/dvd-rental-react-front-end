import React, { Component } from 'react';
import FilmListing from "./film-listing";

class Home extends Component {
  render() {
    return (
      <div className="row">
          <div className="">
              <FilmListing></FilmListing>              
          </div>
      </div>
    );
  }
}
export default Home;
