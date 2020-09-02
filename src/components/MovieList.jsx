import Movie from './Movie.jsx';

const MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map((movie) => {
      <Movie
        movie={movie}
        key={movie.title} />
    })}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;