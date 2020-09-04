import React from 'react';
import WatchedBtn from './WatchedBtn.jsx';

const Movie = (props) => {

  return (
    <div className="movieInfo">
      <ul className="movie-details">
        <li className="movie-title">{props.movie.title}</li>
        <button className="watchClass" onClick={(event)=>{event.preventDefault(); props.toggleWatch(props.movie.title)}} >{props.movie.watch ? "✔" : "❌"}</button>
      </ul>
    </div>
  );
};


export default Movie;
