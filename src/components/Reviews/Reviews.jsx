import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchApi';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(id);
        setReviews(movieReviews);
        console.log(movieReviews);
      } catch (error) {
        console.error(error);
      }
    };

    getReviews();
  }, [id]);

  return (
    <section>
      <ul>
        {reviews &&
          reviews.map(({ id, author, content, updated_at, url }) => (
            <li key={id}>
              <h2>{author}</h2>
              <h3>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {updated_at}
                </a>
              </h3>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Reviews;
