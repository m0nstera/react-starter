import MovieList from './Movie.jsx';

const MovieList = (props) => {
  <div className="movie-list">
    {props.movies.map((movie) => {
      <Movie
        movie={props.movie} />
    })}
  </div>
};

export default MovieList;