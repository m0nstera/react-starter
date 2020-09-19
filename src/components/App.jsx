import React from 'react';
import '../main.css';
import $ from 'jquery';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

// let exampleMovieData = [
//   {title: 'Annihilation'},
//   {title: 'Hackers'},
//   {title: 'Life Aquatic'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

class App extends React.Component {
  constructor(props) {
    super(props);

    // let filtered = movies.filter(movie => movie.watched);
    this.state = {
      allMovies: [],
      searchResults: '',
      userInput: ''
      // showWatched: true
    };
    this.resetMovies = this.resetMovies.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.clickSearch = this.clickSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  componentDidMount() {
    this.resetMovies();
  }

  resetMovies() {
    this.setState({
      allMovies: this.state.allMovies,
    });
  }

  handleInput(input) {
    this.setState({
      userInput: input
    });
  }

  clickSearch() {
    var userinput = this.state.userInput;
    if (userinput === '') {
      this.resetMovies();
    } else {
      var checkTitle = (movie)=>movie.title.toLowerCase() === userinput.toLowerCase();
      var filteredList = this.state.allMovies.filter(checkTitle);

      this.setState({allMovies: filteredList})
    }
  }

  addMovie(movie) {
    let newMovie = {title: movie, watched: true};
    this.setState({
      allMovies: [newMovie, ...this.state.allMovies]
    }, () => {});
  }


  render(){
    let {allMovies, userInput} = this.state;
    return(
    <div>
      <h1 className="header">Movie List</h1>
      <div>
      <SearchBar
       placeholderTxt="movies!"
      //  btntxt="search"
       userInput={userInput}
       handleInput={this.handleInput}
       clickSearch={this.clickSearch}
       addMovie={this.addMovie}
      />
      {/* <SearchBar
       placeholderTxt="add movie"
       btntxt="add"
       userInput={userInput}
       handleInput={this.handleInput}
       addMovie={this.addMovie}
      /> */}
      <MovieList
      movies={allMovies}
      />
      </div>
    </div>
  )}
}

export default App;
