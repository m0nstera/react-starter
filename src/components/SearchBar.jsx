import React from 'react';
// import MovieList from './MovieList.jsx';

const SearchBar = ({placeholderTxt, userInput, handleInput, btntxt, clickSearch, addMovie}) => {

    return (
    <div id="search-bar">
      <form>
        <input id="input"
         type="text"
         // passed down from App in respective FormComp
         placeholder={placeholderTxt}
         value={userInput}
         onChange={e => handleInput(e.target.value)}
        ></input>

        <button
         onClick={e => {e.preventDefault(); clickSearch()}}
        >search</button>
        <button
         onClick={e => {addMovie(document.getElementById("input").value)}}
        >add</button>

      </form>
    </div>
   );
};

export default SearchBar;

//functional components dont have state, they have props
//handlers often in app. app is stateful
// onChange={this.handleInputChange.bind(this)}
