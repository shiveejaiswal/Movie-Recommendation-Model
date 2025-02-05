import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import "./Home.css"

const Home = () => {
  const [title, setTitle] = useState("")
  const [suggestions, setSuggestions] = useState([]) // State for suggestions
  const navigate = useNavigate()

  // Sample movie titles for demonstration
  const movieTitles = ["Inception", "The Matrix", "Interstellar", "Avatar", "Titanic", "The Godfather", "Pulp Fiction"]

  const handleSearch = (e) => {
    e.preventDefault()
    if (title.trim()) {
      navigate(`/recommendations?title=${encodeURIComponent(title)}`)
    }
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value
    setTitle(inputValue)

    // Filter suggestions based on input
    if (inputValue) {
      const filteredSuggestions = movieTitles.filter(movie =>
        movie.toLowerCase().includes(inputValue.toLowerCase())
      )
      setSuggestions(filteredSuggestions)
    } else {
      setSuggestions([]) // Clear suggestions if input is empty
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setTitle(suggestion) // Set the title to the clicked suggestion
    setSuggestions([]) // Clear suggestions after selection
    navigate(`/recommendations?title=${encodeURIComponent(suggestion)}`) // Navigate to recommendations
  }

  return (
    <div className="home-container">
      <motion.div
        className="title-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="main-title">Movie Recommendation System</h1>
        <p className="subtitle">Discover your next favorite movie based on your current interests</p>
      </motion.div>

      <motion.div
        className="search-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={title}
            onChange={handleInputChange} // Update input change handler
            placeholder="Enter a movie title..."
            className="search-input"
          />
          <motion.button type="submit" className="search-button" whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
            Get Recommendations
          </motion.button>
        </form>
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  )
}

export default Home