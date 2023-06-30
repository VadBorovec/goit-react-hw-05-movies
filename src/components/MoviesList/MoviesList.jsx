import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, MovieTitle } from './MoviesList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <MovieTitle>{movie.title}</MovieTitle>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

export default MovieList;
