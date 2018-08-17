import React from "react";
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class MovieForm {
  state = {
    data: {
      title: '',
      genreId: '',
      numberInStock: '',
      dailyRentalRate: ''
    },
    genres: [],
    errors: {}
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
    dailyRentalRate: Joi.number().required().min(0).max(10).label('Daily Rental Rate')
  }

  render() {
    return (
      <div>
        <h1>Movie Form {match.params.id} </h1>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button>
      </div>
    );
  }
};

export default MovieForm;
