import React from 'react';
import Movie from './Movie.jsx';

const WatchedBtn = ({watchedHandler, watchedHandler2}) => {

  return (
    <div id="watch-btn">
      {/* <button
        onClick={(event)=>{
        event.preventDefault();
        watchedHandler()}}>{true ? "watched" : "unwatched"}</button> */}
      <button
        onClick={(event)=>{
        event.preventDefault();
        watchedHandler(false)}}>watched</button>

      <button
        onClick={(event)=>{
        event.preventDefault();
        watchedHandler2(true)}}>to watch</button>
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