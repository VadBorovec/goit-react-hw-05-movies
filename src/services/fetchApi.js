import axios from 'axios';
import {
  API_KEY,
  BASE_URL,
  URL_TREND_DAY,
  URL_TREND_WEEK,
  URL_SEARCH_MOVIE,
} from 'constants/api';

// Function to fetch trending movies of the day
export async function getTrending() {
  try {
    const response = await axios.get(
      `${BASE_URL}${URL_TREND_DAY}?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

// Function to fetch random trending movie of the week
export async function getRandomMovie() {
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

// Function to search movies by keyword
export async function searchMovies(keyword) {
  try {
    const response = await axios.get(
      `${BASE_URL}${URL_SEARCH_MOVIE}?api_key=${API_KEY}&query=${keyword}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

// Function to fetch movie details
export async function getMovieDetails(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Function to fetch movie credits
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

// Function to fetch movie reviews
export async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
