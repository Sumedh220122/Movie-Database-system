import React, { useState, useEffect } from 'react';

const MovieDetails = ({ match }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`/api/movie/${match.params.id}`);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [match.params.id]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieData.title}</h1>
      <p>Release Date: {new Date(movieData.release_date).toLocaleDateString()}</p>
      <p>Runtime: {movieData.runtime} minutes</p>
      <p>Genre: {movieData.genre}</p>
      <p>Budget: ${movieData.budget}</p>
      <p>Revenue: ${movieData.revenue}</p>
      <p>Rating: {movieData.rating}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default MovieDetails;
