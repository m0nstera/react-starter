import React from 'react';
import movieList from './MovieList.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: '',
      currentMovie: ''
    };
  }
  render(){
    return(
    <div>
      Starter App component - hello there
    </div>
  )}
}

export default App;
