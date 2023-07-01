import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  CardWrapper,
  ImgPoster,
  MovieTitle,
} from './MoviesList.styled';

import { IMG_MEDIUM_URL } from 'constants/api';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <ImgPoster
              src={
                movie.poster_path
                  ? `${IMG_MEDIUM_URL}${movie.poster_path}`
                  : 'https://via.placeholder.com/200x300'
              }
              width="200"
              height="300"
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

export default MovieList;
