import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import noImage from '../assets/noimage.png';
import axios from 'axios';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = React.useState(noImage);

  React.useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.movie_id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        const imagePath = response.data.poster_path;
        if (imagePath) {
          setImageUrl(`https://image.tmdb.org/t/p/w600_and_h900_bestv2${imagePath}`);
        } else {
          setImageUrl(noImage);
        }
      } catch (error) {
        console.error("Error fetching movie image:", error);
        setImageUrl(noImage);
      }
    };

    fetchImage();
  }, [movie.movie_id]);

  const handleClick = () => {
    // Pass the movie and the imageUrl as part of the state to MovieDetailsPage
    navigate(`/movies/${movie.movie_id}`, { state: { movie, imageUrl } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
    >
      <div className="aspect-w-2 aspect-h-3">
        <img
          src={imageUrl}
          alt={movie.original_title}
          className="w-full h-full object-cover"
          onError={() => setImageUrl(noImage)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{movie.original_title}</h3>
        <p className="text-sm text-gray-300 truncate">{movie.release_date?.split('-')[0] || 'Unknown'}</p>
      </div>
    </div>
  );
};

export default MovieCard;
