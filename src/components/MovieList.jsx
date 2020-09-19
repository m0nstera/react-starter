import React from 'react';
import Movie from './Movie.jsx';
// import WatchedBtn from './WatchedBtn.jsx';

const MovieList = ({movies, toggleWatched}) => {
  console.log(toggleWatched)
  let mappedList = movies.map((movie, i) => <Movie
    movie={movie}
    key={i}
    toggleWatched={toggleWatched}
    />);

  return (
    <div className="movie-list">
      {mappedList}
    </div>
  )
};

export default MovieList;