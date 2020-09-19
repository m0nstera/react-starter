import React from 'react';
import '../main.css';
import $ from 'jquery';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import WatchedBtn from './WatchedBtn.jsx';

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

    // let filtered = allMovies.filter(movie => movie.watched);
    this.state = {
      allMovies: [],
      searchResults: '',
      userInput: '',
      currentWatched: [],
    };
    this.resetMovies = this.resetMovies.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.clickSearch = this.clickSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.watchedHandler = this.watchedHandler.bind(this);
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

  toggleWatched(title) {
    var updatedList = this.state.allMovies.map((movie)=> {
      //is current movie === title passed in
      if (movie.title === title) {
        return {title: movie.title, watch: !movie.watched};
      }
      return movie;
    });
    //mapped over the list and changed the bool
    this.setState({allMovies: updatedList});
  }

  //  setWatchedView(term) {
  //    this.setState({ currentWatchedView: term });
  //  }

  //   watchedViewCycler() {
  //     // cycle between showing watched, and unwatched
  //     let correctTerm =
  //     this.state.currentWatchedView === "watched"
  //         ? "watched" : "unwatched"
  //         // : this.state.currentWatchedView === "unwatched"
  //         // ? "unwatched";
  //     this.setWatchedView(correctTerm);
  //   }
  watchedHandler(tf) {
    if (tf) {
      var watchedMovies = this.state.allMovies.filter((movie)=> movie.watch);
      var unwatchedMovies = this.state.allMovies.filter((movie)=> !movie.watch);
      this.setState({allMovies: watchedMovies, currentWatched: unwatchedMovies})
    } else {
      this.setState({allMovies: unwatchedMovies, currentWatched: watchedMovies})
    }
  }


  render(){
    let {allMovies, userInput, currentWatched} = this.state;
    return(
    <div>
      <h1 className="header">Movie List</h1>
      <div>
        <SearchBar
        placeholderTxt="movies!"
        userInput={userInput}
        handleInput={this.handleInput}
        clickSearch={this.clickSearch}
        addMovie={this.addMovie}
        />
       </div>
       <div>
       <WatchedBtn
        watchedHandler={this.watchedHandler}
       />
       </div>
       <div>
        <MovieList
        movies={allMovies}
        toggleWatched={this.toggleWatched}
        />
       </div>
    </div>
  )}
}

export default App;
