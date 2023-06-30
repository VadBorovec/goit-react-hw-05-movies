import { Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import BackLink from 'components/BackLink';

import { getMovieById } from 'services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = getMovieById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

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
