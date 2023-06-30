import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import BackLink from 'components/BackLink';

import { fetchMovieDetails } from 'services/fetchApi';

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
      <img src="https://via.placeholder.com/960x240" alt={movie.title} />
      <div>
        <h2>
          Title - {movie.title} - {id}
        </h2>
        <p> Overview - {movie.overview}</p>
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
