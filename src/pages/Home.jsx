import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import './Home.css';
=======

>>>>>>> parent of b734fae (changes in css)
const Home = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/recommendations?title=${encodeURIComponent(title)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 home-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Movie Recommendation System</h1>
        <form onSubmit={handleSearch} className="mb-8">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter movie title"
            className="p-2 rounded-lg w-full"
          />
          <button type="submit" className="mt-2 p-2 bg-blue-600 rounded-lg">Get Recommendations</button>
        </form>
      </div>
    </div>
  );
};

export default Home;