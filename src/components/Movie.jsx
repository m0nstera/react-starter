const Movie = (props) => {
  return (
    <div className="movie media">
      <ul className="movieDescription">
        <li className="movie-title">{props}</li>
        <li className="movie-description">{props}</li>
      </ul>
    </div>
  );
};

export default Movie;