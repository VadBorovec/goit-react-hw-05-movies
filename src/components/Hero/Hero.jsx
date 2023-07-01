import { Link, useLocation } from 'react-router-dom';

import { IMG_LARGE_URL } from 'constants/api';

const Hero = ({ movie }) => {
  const location = useLocation();

  return (
    <section>
      <h1>Welcome</h1>
      {movie && (
        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
          <img
            src={
              movie.backdrop_path
                ? `${IMG_LARGE_URL}${movie.backdrop_path}`
                : 'https://via.placeholder.com/960x540'
            }
            width="960"
            height="540"
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
        </Link>
      )}
    </section>
  );
};

export default Hero;
