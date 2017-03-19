import React, { Component } from 'react';
import "./film-listing.css"

class FilmListing extends Component {    
    render() {
        return (
            <div className="container">
                <h1 className="text-center text-muted">Flim catalog</h1>
                <div className="row flow-offset-1">
                    {this.props.films.map(this.getFilmsMapped)}
                </div>
            </div>
        );
    }

    getFilmsMapped(film){
       return <div key={film.film_id} className="col-xs-6 col-md-3 col-lg-3">
                <div className="film tumbnail thumbnail-3">
                    <a href="#"><img src="https://dummyimage.com/200x300/ccc/000.gif" alt="" /></a>
                    <div className="caption">
                        <em><a href="#">{ film.title }</a></em>
                        <span className="price">&nbsp; Rent: $ { film.rental_rate }</span>
                    </div>
                </div>
            </div>;
    }

}

export default FilmListing;