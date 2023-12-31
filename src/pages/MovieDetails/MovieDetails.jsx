import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import BackLink from 'components/BackLink';
import {
  Section,
  MovieImg,
  MovieWrapper,
  MovieTitle,
  MovieGenres,
  MovieRating,
  MovieOverview,
  InfoList,
  InfoTitle,
  InfoItem,
  Link,
  Loader,
} from './MovieDetails.styled';

import { getMovieDetails } from 'services/fetchApi';
import { IMG_LARGE_URL } from 'constants/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setMovie(movieDetails);
        // console.log(movieDetails);
      } catch (error) {
        console.error(error);
      }
    };

    getMovie();
  }, [id]);

  return (
    <main>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <Section>
        {movie && (
          <>
            <MovieImg
              src={
                movie.backdrop_path
                  ? `${IMG_LARGE_URL}${movie.backdrop_path}`
                  : 'https://via.placeholder.com/960x540'
              }
              width="960"
              height="540"
              alt={movie.title}
            />
            <MovieWrapper>
              <MovieTitle>{movie.title}</MovieTitle>
              {movie.genres && (
                <MovieGenres>
                  Genres: {movie.genres.map(({ name }) => name).join(', ')}
                </MovieGenres>
              )}
              <MovieRating>Rating: {movie.vote_average}</MovieRating>
              <MovieOverview>{movie.overview}</MovieOverview>
              <InfoTitle>Additional information</InfoTitle>
              <InfoList>
                <InfoItem>
                  <Link to="cast">Cast</Link>
                </InfoItem>
                <InfoItem>
                  <Link to="reviews">Reviews</Link>
                </InfoItem>
              </InfoList>
            </MovieWrapper>
          </>
        )}
        {!movie && <Loader>Loading...</Loader>}
      </Section>
      <Suspense fallback={<Loader>Loading subpage...</Loader>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
