import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Route, Link, NavLink} from 'react-router-dom'
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import MovieCard from './Movies/MovieCard';



const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [movies, setMovies] = useState([])
useEffect(() => {
  const getMovies = () => {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        setMovies(response.data);
        // console.log(response.data)
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  
  getMovies();
}, []);

   const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  console.log(savedList)

  return (
    <div>
      <Route path = '/' render = {(props) => <SavedList {...props} list = {savedList} /> } />
      <div className = "Showall">
      <NavLink  to = "/">Show All Movies</NavLink>
      </div>
      <Route exact path = '/' render = {() =>  <MovieList movies = {movies}/> } />
      <Route path = '/Movies/:id' render = {props => <MovieCard {...props} movies = {movies}  addToSavedList = {addToSavedList} />} />
    </div>
  );
};

export default App;
