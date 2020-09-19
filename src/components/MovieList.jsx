import React from 'react';
import Movie from './Movie.jsx';

const MovieList = ({movies, toggleWatched}) => {
  let mappedList = movies.map((movie, i) => (<Movie
    movie={movie}
    key={i}
    toggleWatched={toggleWatched}
    />));

  return (
    <div className="movie-list">
      {mappedList}
    </div>
  )
};

export default MovieList;