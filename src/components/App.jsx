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
      movies: [],
      searchInput: '',
      addInput: '',
      allMovies: []
    };
    this.searchHandler = this.searchHandler.bind(this)
    this.searchBtnClick = this.searchBtnClick.bind(this)
    this.addHandler = this.addHandler.bind(this)
    this.addBtnClick = this.addBtnClick.bind(this)
  }

  componentDidMount() {
    this.resetMovies();
  }

  resetMovies() {
    this.setState({
      allMovies: this.state.movies,
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
      var titleCheckerFunc = (movie)=>movie.title.toLowerCase() === this.state.searchInput.toLowerCase();
      var filteredList = this.state.movies.filter(titleCheckerFunc);
      this.setState({allMovies: filteredList})
    }
  }

  addHandler(newMovie) {
    this.setState({
      addInput: newMovie});
  }

  addBtnClick(movie) {
    var addMov = {title: movie};
    this.setState({
      allMovies: [addMov, ...this.state.allMovies]
    }, ()=> {console.log(this.state)});
  }

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
        addInput={this.state.addInput}
        addHandler={this.addHandler}
        addBtnClick={this.addBtnClick}
        />
      </div>
      <div className="movie-container">
        <MovieList
        movies={this.state.allMovies}
        //.filteredMovies
        //updateName={this.updateName}
         />
      </div>
    </div>
  )}
}

export default App;



    // addBtnClick() {
  //   if (this.state.addInput === '') {
  //     this.resetMovies();
  //   } else {
  //     this.setState({allMovies: exampleMovieData});
  //   }
  // }
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