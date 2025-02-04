import fs from 'fs';
import path from 'path';

// Load JSON data using fs
const moviesData = JSON.parse(fs.readFileSync(path.resolve('src/data/movies_cleaned.json')));
const similarityMatrix = JSON.parse(fs.readFileSync(path.resolve('src/data/similarity_matrix.json')));
const indices = JSON.parse(fs.readFileSync(path.resolve('src/data/indices.json')));

// Create indices mapping
const indicesMapping = Object.fromEntries(
  Object.entries(indices).map(([key, value]) => [moviesData[value].original_title, value])
);

export function getRecommendations(title) {
  try {
    const idx = indicesMapping[title];
    if (idx === undefined) {
      console.error('Movie not found in indices:', title);
      return [];
    }
    
    const sigScores = similarityMatrix[idx]
      .map((score, index) => ({ index, score }))
      .sort((a, b) => b.score - a.score)
      .slice(1, 11); 
    
    const movieIndices = sigScores.map(item => item.index);
    return movieIndices.map(index => moviesData[index]);
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return [];
  }
}
