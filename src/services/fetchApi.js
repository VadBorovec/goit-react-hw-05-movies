import axios from 'axios';
import {
  API_KEY,
  BASE_URL,
  URL_TREND_DAY,
  URL_TREND_WEEK,
  URL_SEARCH_MOVIE,
} from 'constants/api';

// Function to fetch trending movies of the day from TMDB API
export async function getTrendMoviesOfDay() {
  try {
    const response = await axios.get(
      `${BASE_URL}${URL_TREND_DAY}?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

// Function to fetch trending movies of the week from TMDB API
export async function getTrendMoviesOfWeek() {
  try {
    const response = await axios.get(
      `${BASE_URL}${URL_TREND_WEEK}?api_key=${API_KEY}`
    );
    const movies = response.data.results;
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  } catch (error) {
    console.error(error);
  }
}

// Function to fetch movie details from TMDB API
export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Function to search movies by keyword from TMDB API
export async function searchMoviesByKeyword(keyword) {
  try {
    const response = await axios.get(
      `${BASE_URL}${URL_SEARCH_MOVIE}?api_key=${API_KEY}&query=${keyword}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCredits(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
