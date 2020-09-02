const Movie = (props) => {
  return (
    <div className="movieInfo">
      <ul className="movie-details">
        <li className="movie-title">{props}</li>
        <li className="movie-description">{props}</li>
      </ul>
    </div>
  );
};

export default Movie;