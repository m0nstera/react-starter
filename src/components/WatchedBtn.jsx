import React from 'react';
import Movie from './Movie.jsx';

const WatchedBtn = (props) => {

  return (
    <div id="watch-btn">
      <button>watched</button>
      <button>to-watched</button>
    </div>
  );
};

       //onClick={(event) => {event.preventDefault(); props.toggleWatch()}}
      //  onClick={() => this.updateWatchBtns(true)}

export default WatchedBtn;