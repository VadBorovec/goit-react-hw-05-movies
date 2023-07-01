import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0.8rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin: 0;
  padding-left: 1rem;
`;
export const LogoText = styled.span`
  padding-left: 0.4rem;
  color: ${props => props.theme.colors.white};
  text-shadow: 1px 2px 0 ${props => props.theme.colors.accent};
`;

export const Navigation = styled.nav`
  display: flex;
`;
export const Link = styled(NavLink)`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  font-weight: 500;

  &.active {
    color: ${props => props.theme.colors.dark};
    background-color: ${props => props.theme.colors.button};
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 0.8rem 0;
  margin: 1rem 0;
  border-top: 1px solid black;
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
`;
