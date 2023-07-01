import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0;
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1rem;

  :hover {
    color: ${props => props.theme.colors.button};
  }
`;
