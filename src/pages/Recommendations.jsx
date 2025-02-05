import { useEffect, useState } from "react"
import axios from "axios"
import MovieCard from "../components/MovieCard"
import { useLocation } from "react-router-dom"
import "./Recommendations.css"

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const location = useLocation()

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const title = query.get("title")

    const fetchRecommendations = async () => {
      try {
        const response = await axios.post("http://localhost:5000/recommend", { title })
        setRecommendations(response.data)
      } catch (err) {
        console.error("Error fetching recommendations:", err)
        setError("Invalid movie name or the requested movie is not found in the database.")
      } finally {
        setLoading(false)
      }
    }

    if (title) {
      fetchRecommendations()
    }
  }, [location.search])

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="recommendations-container">
      <div className="container">
        <h1 className="recommendations-title">Movie Recommendations</h1>
        {recommendations.length > 0 ? (
          <div className="movie-grid">
            {recommendations.map((movie) => (
              <MovieCard key={movie.movie_id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="no-recommendations">No recommendations found.</p>
        )}
      </div>
    </div>
  )
}

export default Recommendations

