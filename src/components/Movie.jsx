const Movie = (props) => {
  render() {
    return (
      <div className="movieInfo">
        <ul className="movie-details">
          <li className="movie-title">{props.movie.title}</li>
          <li className="movie-description">{props.movie.description}
          </li>
        </ul>
      </div>
    );
  }

};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;