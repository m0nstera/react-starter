import React from 'react';
import MovieList from './MovieList.jsx';

const AddMovie = (props) => {

  return (
  <div id="add-bar">
    <input id="add-input" type="text" placeholder="mo4r movies!" value={props.searchInput}
    onChange={(event) => props.addHandler(event.target.value)}
     />
    <input className="add-btn" type="submit" value="add movie"
    onClick={(event) => {props.addBtnClick()}}
    />
  </div>
 );
};

export default AddMovie;