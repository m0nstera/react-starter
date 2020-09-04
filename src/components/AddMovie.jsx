import React from 'react';
// import MovieList from './MovieList.jsx';

const AddMovie = (props) => {

  return (
  <div id="add-bar">
    <input id="add-input" type="text" placeholder="mo4r movies!" value={props.addInput}
    onChange={(event) => props.addHandler(event.target.value)}
     />
    <input className="add-btn" type="text" value="add movie"
    onClick={(event) => {props.addBtnClick(document.getElementById('add-input').value)}}
    />
  </div>
 );
};


// -clicking add must update the list in real time w/o a refresh
// -move on to displaying only user added movies (no database)
// -refreshing page will wipe the memory


export default AddMovie;