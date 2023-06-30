import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, MovieTitle } from './MoviesList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <img src={movie.poster_path} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

export default MovieList;
