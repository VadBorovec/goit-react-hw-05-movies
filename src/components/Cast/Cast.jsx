import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/fetchApi';
import { IMG_SMALL_URL } from 'constants/api';
import { Container, CardWrapper, CastImage, CastTitle } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const movieCast = await getMovieCredits(id);
        setCast(movieCast);
        console.log(movieCast);
      } catch (error) {
        console.error(error);
      }
    };

    getCast();
  }, [id]);

  return (
    <section>
      <Container>
        {cast &&
          cast.map(
            ({ cast_id, profile_path, original_name, name, character }) => (
              <CardWrapper key={cast_id}>
                <CastImage
                  src={
                    profile_path
                      ? `${IMG_SMALL_URL}${profile_path}`
                      : 'https://via.placeholder.com/200x300'
                  }
                  alt={original_name}
                />
                <CastTitle>
                  {name} <br /> Character: {character}
                </CastTitle>
              </CardWrapper>
            )
          )}
      </Container>
    </section>
  );
};

export default Cast;