import React from 'react';
import MovieList from './MovieList.jsx';
import exampleMovieData from '../data/exampleMovieData.js';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import '../main.css';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: exampleMovieData,
      searchInput: '',
      filteredMovies: []
    };
    this.searchHandler = this.searchHandler.bind(this)
    this.searchBtnClick = this.searchBtnClick.bind(this)
    this.addHandler = this.searchHandler.bind(this)
    this.addBtnClick = this.searchBtnClick.bind(this)
  }

  componentDidMount() {
    this.resetMovies();
  }

  resetMovies() {
    this.setState({
      filteredMovies: this.state.movies,
    });
  }

  searchHandler(input) {
    this.setState({
      searchInput: input
    });
  }


  searchBtnClick() {
    if (this.state.searchInput === '') {
      this.resetMovies();
    } else {
      var titleCheckerFunc = (movie)=> movie.title.toLowerCase() === this.state.searchInput.toLowerCase();
      var filteredList = this.state.movies.filter(titleCheckerFunc);
      this.setState({filteredMovies: filteredList})
    }
  }

  addHandler(input) {
    this.setState({
      movies: exampleMovieData.push(input)
    });
  }

  addBtnClick(input) {
    this.setState({
      movies: exampleMovieData.push(input)
    });
  }
// searchBtnClick() {
//   if (this.state.searchInput === '') {
//     this.resetMovies();
//   } else {
//     var titleCheckerFunc = (movie)=> {
//       var movieTitle = movie.title.toLowerCase();
//       return movieTitle === this.state.searchInput.toLowerCase();}
//     var filteredList = this.state.movies.filter(titleCheckerFunc);
//     this.setState({filteredMovies: filteredList})
//   }
// }



  render(){
    return(
    <div>
      <h1 className="header">Movie List</h1>
      <div className="search-area">
        <SearchBar
        searchInput={this.state.searchInput}
        searchHandler={this.searchHandler}
        searchBtnClick={this.searchBtnClick}
        />
      </div>
      <div className="add-area">
        <AddMovie
        // searchInput={this.state.searchInput}
        addHandler={this.searchHandler}
        addBtnClick={this.searchBtnClick}
        />
      </div>
      <div className="movie-container">
        <MovieList
        movies={this.state.filteredMovies}
        //.filteredMovies
        //updateName={this.updateName}
         />
      </div>
    </div>
  )}
}

export default App;



