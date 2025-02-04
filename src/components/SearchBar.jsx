import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"
import "./SearchBar.css"

const SearchBar = ({ query, setQuery, onSearch, movies }) => {
  const [suggestions, setSuggestions] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)
  const suggestionsRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.length > 1) {
      const filtered = movies
        .filter((movie) => movie.original_title.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5)
      setSuggestions(filtered)
      setIsOpen(true)
    } else {
      setSuggestions([])
      setIsOpen(false)
    }
  }, [query, movies])

  const handleSuggestionClick = (movie) => {
    setQuery(movie.original_title)
    setIsOpen(false)
    onSearch()
  }

  return (
    <div className="search-container" ref={suggestionsRef}>
      <div className="search-input-container">
        <Search className="search-icon" size={20} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="search-input"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSearch}
          className="search-button"
        >
          Search
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="suggestions-container"
          >
            {suggestions.map((movie) => (
              <motion.div
                key={movie.movie_id}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(movie)}
              >
                <span>{movie.original_title}</span>
                <span className="suggestion-year">{movie.release_date?.split("-")[0] || "Unknown"}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SearchBar

