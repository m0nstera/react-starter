import React from 'react';

const Movie = ({movie}) => {

  return (
    <div className="movie">
      <ul>
        <li>
          {movie.title}
          {movie.watched}
        </li>
      </ul>
    </div>
  );
};


export default Movie;


{/* <ul className="movie-details">
<li className="movie-title">{props.movie.title}</li>
<button
className="watchClass"
onClick={(event)=>{event.preventDefault(); props.toggleWatch(props.movie.title)}} >{props.movie.watch ? "✔" : "❌"}</button>
</ul> */}