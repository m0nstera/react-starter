import React from 'react';
import MovieList from './MovieList.jsx';

const SearchBar = (props) => {

  return (
  <div id="search-bar">
    <input id="search-input" type="text" placeholder="movies?!" value={props.searchInput}
    onChange={(event) => props.searchHandler(event.target.value)}
     />
    <input className="search-btn" type="submit" value="search"
    onClick={(event) => {event.preventDefault(); props.searchBtnClick()}}
    />
  </div>
 );
};

export default SearchBar;

//functional components dont have state, they have props
//handlers often in app. app is stateful
// onChange={this.handleInputChange.bind(this)}
