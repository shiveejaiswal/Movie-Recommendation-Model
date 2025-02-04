# Movie Recommendation System
This project is a movie recommendation system that suggests similar movies based on their overviews. It utilizes data from movie datasets, processes it, and generates JSON files that can be used for recommendations.

## Getting Started

### Cloning the Repository
To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/shiveejaiswal/Movie-Recommendation-Model
```

### Navigate into the project directory:

```bash
cd Movie-Recommendation-Model
```

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

### Get TMDB API Key
1. **Create an Account**: 
   - Go to [TMDB (The Movie Database)](https://www.themoviedb.org/) and create an account if you don't have one.

2. **Get Your API Key**: 
   - After logging in, navigate to the API section in your account settings and apply for an API key.

3. **Store the API Key**: 
   - Create a `.env` file in the project directory if it does not already exist.
   - Add the following line to the `.env` file, replacing `your_api_key_here` with your actual TMDB API key:

   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

### Dataset
1. **Download the Datasets**: 
   - You will need to download the following datasets:
     - [Movie Credits Dataset](https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata?select=tmdb_5000_credits.csv)
     - [Movie Details Dataset](https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata?select=tmdb_5000_movies.csv)

2. **Create a Datasets Folder**: 
   - In the project directory, create a folder named `datasets` if it does not already exist.

3. **Place the Datasets**: 
   - Extract the CSV files and move them into the `datasets` folder.

### Install Frontend Dependencies
Before running the project, navigate to the project directory and install the required dependencies:

```bash
npm install
```

### Running the Project
1. **Run the Jupyter Notebook**:
   - Open the Jupyter notebook file (`Movie.ipynb`) in your preferred environment.
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
Thank you to the creators of the datasets used in this project.