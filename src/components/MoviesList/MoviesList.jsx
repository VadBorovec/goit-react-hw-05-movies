import { Link, useLocation } from 'react-router-dom';
import {
  Section,
  Container,
  CardWrapper,
  ImgPoster,
  MovieTitle,
  ErrorWrapper,
  ErrorHeader,
  ErrorText,
} from './MoviesList.styled';

import { IMG_MEDIUM_URL } from 'constants/api';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Section>
      <Container>
        {movies &&
          movies.map(({ id, poster_path, title }) => (
            <CardWrapper key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <ImgPoster
                  src={
                    poster_path
                      ? `${IMG_MEDIUM_URL}${poster_path}`
                      : 'https://via.placeholder.com/200x300'
                  }
                  width="200"
                  height="300"
                  alt={title}
                />
                <MovieTitle>{title}</MovieTitle>
              </Link>
            </CardWrapper>
          ))}
      </Container>
      {!movies && (
        <ErrorWrapper>
          <ErrorHeader>Sorry, no movies found.</ErrorHeader>
          <ErrorText>Please try again later.</ErrorText>
        </ErrorWrapper>
      )}
    </Section>
  );
};

export default MovieList;
