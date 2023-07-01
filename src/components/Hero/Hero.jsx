import { Link, useLocation } from 'react-router-dom';

import { Section, CardWrapper, HeroImage, HeroTitle } from './Hero.styled';
import { IMG_LARGE_URL } from 'constants/api';

const Hero = ({ movie }) => {
  const location = useLocation();
  return (
    <Section>
      {movie && (
        <>
          <CardWrapper>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <HeroImage
                src={
                  movie.backdrop_path
                    ? `${IMG_LARGE_URL}${movie.backdrop_path}`
                    : 'https://via.placeholder.com/960x540'
                }
                width="960"
                height="540"
                alt={movie.title}
              />
              <HeroTitle>{movie.title}</HeroTitle>
            </Link>
          </CardWrapper>
        </>
      )}
      {!movie && (
        <CardWrapper>
          <HeroImage
            src="https://via.placeholder.com/960x540"
            width="960"
            height="540"
            alt="Get Movies?"
          />
          <HeroTitle>Welcome to Get Movie App</HeroTitle>
        </CardWrapper>
      )}
    </Section>
  );
};

export default Hero;
