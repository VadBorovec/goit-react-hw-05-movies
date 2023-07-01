import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from 'components/MoviesList';
import SearchBox from 'components/SearchBox';

import { searchMovies } from 'services/fetchApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('name') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await searchMovies(movieTitle);
        setMovies(res);
        // console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, [movieTitle]);

  const visibleMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(movieTitle.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={movieTitle} onChange={updateQueryString} />
      <MovieList movies={visibleMovies} />
    </main>
  );
};

export default Movies;
