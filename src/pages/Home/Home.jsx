import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MovieList from 'components/MoviesList';
import { getTrendMoviesOfDay, getTrendMoviesOfWeek } from 'services/fetchApi';
import { IMG_LARGE_URL } from 'constants/api';

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
      <h1>Welcome</h1>
      {movie && (
        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
          <img
            src={
              movie.backdrop_path
                ? `${IMG_LARGE_URL}${movie.backdrop_path}`
                : 'https://via.placeholder.com/960x540'
            }
            width="960"
            height="540"
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
        </Link>
      )}
      <MovieList movies={movies} location={location} />
    </main>
  );
};

export default Home;
