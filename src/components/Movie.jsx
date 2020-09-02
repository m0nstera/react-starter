const Movie = (props) => {
  return (
    <div className="movie media">
      <div className="media-body">
        <div className="movie-title">{props}
        </div>
        <div className="movie-description">{props}
        </div>
      </div>
    </div>
  );
};

export default Movie;