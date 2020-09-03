import React from 'react';
import Movie from './Movie.jsx';
// import Movie from './Movie';

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
// <div className="movie-list">
//   <div>Mean Girls</div>
//   <div>Hackers</div>
//   <div>The Grey</div>
//   <div>Sunshine</div>
//   <div>Ex Machina</div>
// </div>