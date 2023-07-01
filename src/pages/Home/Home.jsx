import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/MoviesList';
import Hero from 'components/Hero';
import { getTrendMoviesOfDay, getTrendMoviesOfWeek } from 'services/fetchApi';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDayMovies = async () => {
      try {
        const res = await getTrendMoviesOfDay();
        setMovies(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDayMovies();
  }, []);

  useEffect(() => {
    const fetchWeekMovies = async () => {
      try {
        const res = await getTrendMoviesOfWeek();
        setMovie(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchWeekMovies();
  }, []);

  return (
    <main>
      <Hero movie={movie} location={location} />
      <MovieList movies={movies} location={location} />
    </main>
  );
};

export default Home;
