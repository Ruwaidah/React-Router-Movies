import axios from 'axios';
import React, {useState, useEffect} from 'react';



const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  useEffect(() => {
    const id = props.movie.match.params.id;
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
   const saveMovie = () => {
    const addToSavedList = props.movie.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button" onClick = {
        () => saveMovie()
      }>Save</div>
    </div>
  );
}





const MovieCard = props => {
  return (
    <Movie  movie = {props} />
    )
};
export default MovieCard;
