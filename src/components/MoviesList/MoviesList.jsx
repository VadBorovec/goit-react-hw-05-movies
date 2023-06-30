import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  CardWrapper,
  ImgPoster,
  MovieTitle,
} from './MoviesList.styled';

import { IMG_POSTER_URL } from 'constants/api';

const MovieList = ({ movies }) => {
  const location = useLocation();
  // const image = movie.backdrop_path
  //   ? `${IMG_URL}${movie.backdrop_path}`
  //   : `${IMG_URL}${movie.poster_path}`;

  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <ImgPoster
              src={`${IMG_POSTER_URL}${movie.poster_path}`}
              width="224"
              height="335"
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
