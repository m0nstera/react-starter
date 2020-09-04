import React from 'react';
import WatchedBtn from './WatchedBtn.jsx';

const Movie = (props) => {

  return (
    <div className="movieInfo">
      <ul className="movie-details">
        <li className="movie-title">{props.movie.title}</li>
        {/* <li className="movie-description">{props.movie.description} */}
        {/* </li> */}
      </ul>
    </div>
  );
};


export default Movie;
