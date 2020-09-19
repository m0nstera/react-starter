import React from 'react';

const Movie = ({movie, toggleWatch}) => {

  return (
    <div className="movie">
      <ul>
        <li>
          {movie.title}
          <button
          onClick={e => {e.preventDefault(); toggleWatch(movie.title)}}
          >{movie.watched ? "✔" : "❌"}</button>
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