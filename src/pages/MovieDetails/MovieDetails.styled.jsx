import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  margin-bottom: 1rem;
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  color: ${props => props.theme.colors.light};
  text-shadow: 1px 1px 0 ${props => props.theme.colors.accent};
`;

export const MovieTitle = styled.h2`
  text-shadow: 2px 3px 0 ${props => props.theme.colors.accent};
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const MovieGenres = styled.h3`
  margin-bottom: 0.5rem;
`;

export const MovieRating = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const MovieOverview = styled.p`
  margin-bottom: 1.5rem;
`;

export const InfoTitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.light};
  text-shadow: 1px 1px 0 ${props => props.theme.colors.accent};
`;

export const InfoList = styled.ul`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const InfoItem = styled.li`
  padding-bottom: 1rem;
`;

export const Link = styled(NavLink)`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  text-shadow: none;
  font-weight: 500;

  &.active {
    color: ${props => props.theme.colors.dark};
    background-color: ${props => props.theme.colors.button};
  }
`;
