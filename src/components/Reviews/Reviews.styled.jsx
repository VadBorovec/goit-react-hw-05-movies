import styled from '@emotion/styled';

export const Section = styled.section`
  margin-bottom: 1rem;
`;

export const ReviewsList = styled.ul`
  margin-bottom: 1rem;
  padding: 1rem;
  color: ${props => props.theme.colors.light};
  text-shadow: 1px 1px 0 ${props => props.theme.colors.accent};
`;

export const ReviewsItem = styled.li`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: ${props => props.theme.colors.mainBackground};
  &:hover {
    color: ${props => props.theme.colors.accent};
    text-shadow: 1px 1px 0 ${props => props.theme.colors.dark};
    background: ${props => props.theme.colors.tagBackground};
  }
`;

export const ReviewsAuthor = styled.h2`
  margin-bottom: 0.5rem;
`;

export const ReviewsDate = styled.h3`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.accent};
  text-shadow: 1px 1px 0 ${props => props.theme.colors.light};
`;

export const ReviewsContent = styled.p`
  margin-bottom: 0.5rem;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

export const ErrorHeader = styled.h2`
  color: ${props => props.theme.colors.white};
  text-shadow: 2px 4px 0 ${props => props.theme.colors.accent};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ErrorText = styled.p`
  color: ${props => props.theme.colors.light};
  font-size: 1.2rem;
`;
