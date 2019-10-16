import React from 'react';

const SavedList = props => {
 return <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <p className="saved-movie">{movie.title}</p>
    ))}
    <div className="home-button" onClick = {
      () => props.history.goBack()}>Home</div>
  </div>
};

export default SavedList;
