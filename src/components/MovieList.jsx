import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => {
  return (
    <div className="movie-list">
    {props.movies.map((movie) => (
    <Movie
      movie={movie}
      />
      )
    )}
  </div>
  )
};


export default MovieList;