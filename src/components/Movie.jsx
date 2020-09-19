import React from 'react';

const Movie = ({movie, toggleWatched}) => {

  return (
    <div className="movie">
      <ul>
        <li>
          {movie.title}
          <button
          onClick={e => {e.preventDefault(); toggleWatched(movie.title)}}
          >{movie.watched ? "✔" : "❌"}</button>
        </li>
      </ul>
    </div>
  );
};


export default Movie;