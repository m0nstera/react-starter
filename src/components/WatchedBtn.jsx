import React from 'react';
import Movie from './Movie.jsx';

const WatchedBtn = (props) => {

  return (
    <div id="watch-btn">
      <button
      onClick={(event)=>{
        event.preventDefault();
        props.watchHandler(true)}}>watched</button>

      <button
      onClick={(event)=>{
        event.preventDefault();
        props.watchHandler(false)}}>to watch</button>
    </div>
  );
};


export default WatchedBtn;



// watchHandler(string) {
//   // find title in all movies this.state.movies
//   var myMovies = this.state.movies.map( (movie) => {
//     if (movie.title !== string) {
//       return movie;
//     } else {
//       return {title:movie.title, watch:!movie.watch}
//     }
//   });
//   var watchedMov = myMovies.filter((movie) => {
//     return movie.watch;
//   })
//   var unwatchedMov = myMovies.filter((movie) => {
//     return movie.watch === false;
//   })
//   this.setState({movies:myMovies, watchedMovies:watchedMov, unwatchedMovies:unwatchedMov});
// }