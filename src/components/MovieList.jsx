import React from 'react';
import Movie from './Movie.jsx';
import AddMovie from './AddMovie.jsx';
import WatchedBtn from './WatchedBtn.jsx';
//togglewatch is being passed down*

const MovieList = (props) => {
  return (
    <div className="movie-list">
    {props.movies.map((movie) => (
    <Movie
      movie={movie}
       toggleWatch={props.toggleWatch}
      />
      )
    )}
  </div>
  )
};

export default MovieList;