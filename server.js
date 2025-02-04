import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getRecommendations } from './src/utils/recommendations.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to get movie recommendations
app.post('/recommend', (req, res) => {
  const { title } = req.body;
  const recommendations = getRecommendations(title);
  
  // Check if recommendations were found
  if (!recommendations || recommendations.length === 0) {
    return res.status(404).json({ message: 'No recommendations found.' });
  }

  res.json(recommendations);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});