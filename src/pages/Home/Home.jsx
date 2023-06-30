import { useState, useEffect } from 'react';
import MovieList from 'components/MoviesList';
import { getTrendMoviesOfDay } from 'services/fetchApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getTrendMoviesOfDay();
        console.log(res);
        setMovies(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Welcome</h1>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
