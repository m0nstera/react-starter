import React from 'react';
import MovieList from './MovieList.jsx';

const SearchBar = (props) => {
  return (
  <div id="search-bar">
    <input
    id="search-input" type="text"
    placeholder="movies?!"/>
    <input className="search-btn" type="submit" value="search"></input>
  </div>
 )
};

export default SearchBar;

//functional components dont have state, they have props
//handlers often in app. app is stateful
// onChange={this.handleInputChange.bind(this)}


// {/* <button className="btn">
// <span className="search-btn"></span>
// </button> */}

// {/* <input id="searchInput" type="text" name="name" required
//        minlength="1" maxlength="8" size="10">
// <input type="submit" value="Send Request"></input> */}