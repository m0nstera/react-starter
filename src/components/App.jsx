import React from 'react';
import MovieList from './MovieList.jsx';
import exampleMovies from '../data/exampleMovies.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: exampleMovieData,
      currentMovie: exampleMovieData[0]
    };
  }

  render(){
    return(
    <div>
      <div className="movie-container">
        <MovieList movies={this.state.movies} />
      </div>
    </div>
  )}
}

export default App;
