import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import MovieList from 'components/MoviesList';
import Hero from 'components/Hero';

import { getTrending, getRandomMovie } from 'services/fetchApi';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await getTrending();
        setMovies(res);
        // console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, []);

  useEffect(() => {
    const getRandom = async () => {
      try {
        const res = await getRandomMovie();
        setRandomMovie(res);
        // console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    getRandom();
  }, []);

  return (
    <main>
      <Hero movie={randomMovie} location={location} />
      <MovieList movies={movies} location={location} />
    </main>
  );
};

export default Home;
