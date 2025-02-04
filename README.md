# Movie Recommendation System

## Overview

This project is a movie recommendation system that suggests similar movies based on their overviews. It utilizes data from movie datasets, processes it, and generates JSON files that can be used for recommendations.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (for running the backend)
- [npm](https://www.npmjs.com/) (Node package manager)
- [Python](https://www.python.org/) (for running the Jupyter notebook)
- [Jupyter Notebook](https://jupyter.org/) (to run the Python notebook)

### Requirements

To run this project, you will need the following Python libraries:

- `pandas`
- `numpy`
- `scikit-learn`

You can install the required Python libraries using pip:

```bash
pip install pandas numpy scikit-learn
```

1. **Download the Datasets**:

   - You will need to download the following datasets:
     - [Movie Credits Dataset](https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata?select=tmdb_5000_credits.csv)
     - [Movie Details Dataset](https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata?select=tmdb_5000_movies.csv)

2. **Create a Datasets Folder**:

   - In the project directory, create a folder named `datasets` if it does not already exist.

3. **Place the Datasets**:
   - Extract the csv files and move them into the `datasets` folder.

### Running the Project

1. **Run the Jupyter Notebook**:

   - Open the Jupyter notebook file in your preferred environment.
   - Run all the cells in the notebook. This will process the datasets and generate the necessary JSON files for movie recommendations.

2. **Start the Backend**:

   - Navigate to the backend directory in your terminal.
   - Run the following command to start the backend server:

   ```bash
   node server.js
   ```

3. **Start the Frontend**:
   - Navigate to the frontend directory in your terminal.
   - Run the following command to start the frontend:
   ```bash
   npm run dev
   ```

### Project Up and Running

Once both the backend and frontend are running, the project is up and running! You can now use the frontend to search for movies and get recommendations.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

## Acknowledgments

- Thank you to the creators of the datasets used in this project.
