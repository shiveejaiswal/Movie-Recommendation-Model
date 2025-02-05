import * as React from "react"
import { motion } from "framer-motion"
import { useParams } from "react-router-dom"
import { Clock, Star, Calendar, Globe } from "lucide-react"
import axios from "axios"
import "./MovieDetailsPage.css"

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&append_to_response=credits`,
        )
        setMovie(response.data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovieDetails()
  }, [movieId])

  if (loading)
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
      </div>
    )

  if (error) return <div className="error-message">Error: {error}</div>

  return (
    <div className="movie-details">
      <motion.div
        className="details-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="poster-section">
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              onError={(e) => {
                e.target.src = "/placeholder.svg"
                e.target.style.width = "300px"
                e.target.style.height = "450px"
              }}
            />
          </div>
        </div>

        <div className="content-section">
          <div className="header-section">
            <h1 className="movie-title">{movie.title}</h1>
          </div>

          <div className="meta-section">
            <div className="movie-meta">
              <div className="meta-item">
                <Calendar size={20} />
                <span>{movie.release_date?.split("-")[0]}</span>
              </div>
              <div className="meta-item">
                <Clock size={20} />
                <span>{movie.runtime} min</span>
              </div>
              <div className="meta-item">
                <Star size={20} />
                <span className="rating">{movie.vote_average.toFixed(1)}/10</span>
              </div>
              <div className="meta-item">
                <Globe size={20} />
                <span>{movie.original_language?.toUpperCase()}</span>
              </div>
            </div>
          </div>

          <div className="overview-section">
            <h2 className="overview-title">Overview</h2>
            <p className="overview">{movie.overview}</p>
          </div>

          <div className="cast-crew-section">
            <div className="cast-section">
              <h3 className="section-title">Cast</h3>
              <div className="cast-list">
                {movie.credits?.cast?.slice(0, 5).map((person) => (
                  <motion.div key={person.id} className="cast-item" whileHover={{ x: 5 }}>
                    <div className="name">{person.name}</div>
                    <div className="role">as {person.character}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="crew-section">
              <h3 className="section-title">Crew</h3>
              <div className="crew-list">
                {movie.credits?.crew?.slice(0, 5).map((person) => (
                  <motion.div key={person.id} className="crew-item" whileHover={{ x: 5 }}>
                    <div className="name">{person.name}</div>
                    <div className="role">{person.job}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MovieDetailsPage

