// import axios from 'axios';
import movies from '../data/movies.json';

export const getMovies = () => {
  return movies;
};

export const getMovieById = movieId => {
  return movies.find(movie => movie.id === movieId);
};
