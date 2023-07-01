import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Section,
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  ReviewsDate,
  ReviewsContent,
  ErrorWraper,
  ErrorHeader,
  ErrorText,
} from './Reviews.styled';
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
    <Section>
      <ReviewsList>
        {reviews &&
          reviews.map(({ id, author, content, updated_at, url }) => (
            <ReviewsItem key={id}>
              <ReviewsAuthor>{author}</ReviewsAuthor>
              <ReviewsDate>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {updated_at}
                </a>
              </ReviewsDate>
              <ReviewsContent>{content}</ReviewsContent>
            </ReviewsItem>
          ))}
      </ReviewsList>
      {reviews.length < 1 && (
        <ErrorWraper>
          <ErrorHeader>Sorry, no reviews found.</ErrorHeader>
          <ErrorText>Please try again later.</ErrorText>
        </ErrorWraper>
      )}
    </Section>
  );
};

export default Reviews;
