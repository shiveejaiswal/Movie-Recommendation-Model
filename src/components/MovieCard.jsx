import * as React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import noImage from "../assets/noimage.png"
import axios from "axios"
import "./MovieCard.css"

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  const [imageUrl, setImageUrl] = React.useState(noImage)

  React.useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.movie_id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        )
        const imagePath = response.data.poster_path
        if (imagePath) {
          setImageUrl(`https://image.tmdb.org/t/p/w600_and_h900_bestv2${imagePath}`)
        } else {
          setImageUrl(noImage)
        }
      } catch (error) {
        console.error("Error fetching movie image:", error)
        setImageUrl(noImage)
      }
    }

    fetchImage()
  }, [movie.movie_id])

  const handleClick = () => {
    navigate(`/movies/${movie.movie_id}`, { state: { movie, imageUrl } })
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="movie-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="movie-poster">
        <img src={imageUrl || "/placeholder.svg"} alt={movie.original_title} onError={() => setImageUrl(noImage)} />
        <div className="movie-info">
          <h3>{movie.original_title}</h3>
          <p>{movie.release_date?.split("-")[0] || "Unknown"}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default MovieCard

