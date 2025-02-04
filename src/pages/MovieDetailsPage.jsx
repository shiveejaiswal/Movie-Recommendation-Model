<<<<<<< HEAD
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./MovieDetailsPage.css";
=======
import * as React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
>>>>>>> parent of b734fae (changes in css)

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&append_to_response=videos,images,credits`
        );
        setMovie(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const imageUrl = movie?.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;

  if (loading)
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
      </div>
    );

  return (
    <motion.div
      className="movie-details container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="movie-header">
        <motion.div
          className="movie-poster"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={movie.original_title}
            onError={() => console.error("Image failed to load:", imageUrl)}
          />
        </motion.div>
        <motion.div
          className="movie-info"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="movie-title">{movie.original_title}</h1>
          <div className="movie-meta">
            <span>{movie.release_date?.split("-")[0] || "Unknown"}</span>
            <span>{movie.runtime} min</span>
            <span className="rating">{movie.vote_average}/10</span>
            <span>{movie.original_language?.toUpperCase()}</span>
          </div>
          <p className="overview">{movie.overview}</p>
        </motion.div>
      </div>
      <div className="cast-crew">
        <div className="cast">
          <h3>Cast</h3>
          <ul>
            {movie.credits.cast.slice(0, 5).map((actor) => (
              <li key={actor.id}>{actor.name} as {actor.character}</li>
            ))}
          </ul>
        </div>
        <div className="crew">
          <h3>Crew</h3>
          <ul>
            {movie.credits.crew.slice(0, 5).map((member) => (
              <li key={member.id}>{member.name} - {member.job}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieDetailsPage;