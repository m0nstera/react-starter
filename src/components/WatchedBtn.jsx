import React from 'react';
import Movie from './Movie.jsx';

const WatchedBtn = (props) => {

  return (
    <div id="watch-btn">
      <button
      onClick={(event)=>{event.preventDefault(); props.watchHandler(true)}}>watched</button>

      <button
      onClick={(event)=>{event.preventDefault(); props.watchHandler(false)}}
      >to watch</button>
    </div>
  );
};

       //onClick={(event) => {event.preventDefault(); props.toggleWatch()}}
      //  onClick={() => this.updateWatchBtns(true)}

export default WatchedBtn;