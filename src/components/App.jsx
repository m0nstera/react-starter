import React from 'react';
import MovieList from './MovieList.jsx';
import exampleMovieData from '../data/exampleMovieData.js';
import '../main.css';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: exampleMovieData,
      //filteredMovies: '',
      currentMovie: exampleMovieData[0]
    };
    //this.updateName = this.updateName.bind(this)
  }

  // componentDidMount(){}

  //updateName() {
  //   this.setState({}, function() {})
  // }

  render(){
    return(
    <div>
      <h1 className="navbar">MovieList</h1>
      <div className="movie-container">
        <MovieList
        movies={this.state.movies}
        //updateName={this.updateName}
         />
      </div>
    </div>
  )}
}

export default App;