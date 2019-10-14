import React from 'react';
import Movie from './Movie'

const MovieCard = props => {
  return (
    <Movie  id = {props.match.params.id}/>
    )
};

export default MovieCard;
