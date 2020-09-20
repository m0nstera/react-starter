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
      userInput: '',
      otherWatched: [],
      // currentWatchedView: 'all'
    };
    this.resetMovies = this.resetMovies.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.clickSearch = this.clickSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.watchedHandler = this.watchedHandler.bind(this);
    this.watchedHandler2 = this.watchedHandler2.bind(this);
    // this.watchedViewCycler = this.watchedViewCycler.bind(this);
		// this.setWatchedView = this.setWatchedView.bind(this);
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
    let newMovie = {title: movie, watched: false};
    this.setState({
      allMovies: [newMovie, ...this.state.allMovies]
    }, this.resetMovies);
  }

  toggleWatched(title) {
    let {allMovies} = this.state;
    var updatedList = allMovies.map((movie)=> {
      //is current movie === title passed in
      if (movie.title === title) {
        return {title: movie.title, watched: !movie.watched};
      }
      return movie;
    });
    //mapped over the list and changed the bool
    this.setState({allMovies: updatedList});
  }

  watchedHandler(tf) {
    if (tf) {
      var watchedMovies = this.state.allMovies.filter((movie)=> !movie.watched);
      var unwatchedMovies = this.state.allMovies.filter((movie)=> movie.watched);
      this.setState({allMovies: watchedMovies})
    }
    else {
      this.setState({allMovies: unwatchedMovies})
    }
  };

  watchedHandler2(tf) {
    if (tf) {
      var unwatchedMovies = this.state.allMovies.filter((movie)=> movie.watched);
      var watchedMovies = this.state.allMovies.filter((movie)=> !movie.watched);
      this.setState({allMovies: unwatchedMovies})
    }
    else {
      this.setState({allMovies: watchedMovies})
    }
  };

  //  setWatchedView(term) {
  //    this.setState({ currentWatchedView: term });
  //  }

  //  watchedViewCycler() {
	// 	// cycle between showing all, watched, and unwatched
	// 	let { currentWatchedView } = this.state;
	// 	let correctTerm =
	// 		currentWatchedView === "all"
	// 			? "watched"
	// 			: currentWatchedView === "watched"
	// 			? "unwatched"
	// 			: "all";
	// 	this.setWatchedView(correctTerm);
	// }


  render(){
    let {allMovies, userInput, otherWatched} = this.state;

      // let watchedMovies = this.state.allMovies.filter(
      // 	(movie) => movie.watched
      // );
      // let unwatchedMovies = this.state.allMovies.filter(
      // 	(movie) => !movie.watched
      // );
      // let correctMovieList =
      // 	currentWatchedView === "watched"
      // 		? watchedMovies
      // 		: currentWatchedView === "unwatched"
      // 		? unwatchedMovies
      // 		: allMovies;
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
          watchedHandler2={this.watchedHandler2}
       />
       {/* <button className="watched-view-toggle-button" onClick={(e)=>{e.preventDefault(); this.watchedViewCycler()}}>{currentWatchedView}</button> */}
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
