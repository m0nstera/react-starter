import React from 'react';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: '',
      currentMovie: ''
    };
  }
  render(){
    return(
    <div id="media">
      <MovieList movies={this.state.movies} />
    </div>
  )}
}

export default App;
