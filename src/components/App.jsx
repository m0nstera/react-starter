import React from 'react';
import MovieList from './MovieList.jsx';
import exampleMovieData from '../data/exampleMovieData.js';
import SearchBar from './SearchBar.jsx';
import '../main.css';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: exampleMovieData,
      filteredMovies: ''
    };
    // this.searchHandler = this.searchHandler.bind(this)
  }

  // componentDidMount(){}

  // searchHandler(searchStr) {
  //   console.log(searchStr)
  //   this.setState({}, function() {})
  // }

  //updateName() {
  //   this.setState({}, function() {})
  // }

  render(){
    return(
    <div>
      <h1 className="header">MovieList</h1>
      <div className="search-area">
        <SearchBar
        // searchHandler={this.searchHandler}
        />
        {/* <SearchButton /> */}
      </div>
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