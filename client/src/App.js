import React, { useState } from 'react';
import {Route, Link} from 'react-router-dom'
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import MovieCard from './Movies/MovieCard'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      <Link to = "/Movies">Show All Movies</Link>
      <Route exact path = '/Movies' component = { MovieList } />
      <Route path = '/Movies/:id' component = {MovieCard} />
    </div>
  );
};

export default App;
