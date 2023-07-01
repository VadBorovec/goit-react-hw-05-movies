import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import BackLink from 'components/BackLink';
import { ImgBgd } from './MovieDetails.styled';

import { fetchMovieDetails } from 'services/fetchApi';
import { IMG_LARGE_URL } from 'constants/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieDetails = await fetchMovieDetails(id);
        setMovie(movieDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <ImgBgd
        src={
          movie.poster_path
            ? `${IMG_LARGE_URL}${movie.backdrop_path}`
            : 'https://via.placeholder.com/960x540'
        }
        width="960"
        height="540"
        alt={movie.title}
      />
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Genres - {movie.genres.join(', ')}</p>
      </div>

      <ul>
        <h3>Additional information</h3>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
