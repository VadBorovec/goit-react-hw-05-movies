import { useSearchParams } from 'react-router-dom';

import MovieList from 'components/MoviesList';
import SearchBox from 'components/SearchBox';

import { getMovies } from 'services/api';

const Movies = () => {
  const movies = getMovies();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('name') ?? '';

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
