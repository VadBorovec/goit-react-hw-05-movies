import styled from '@emotion/styled';

export const Section = styled.section`
  margin-bottom: 1rem;
`;

export const CardWrapper = styled.div`
  position: relative;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroTitle = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  margin: 0;
  padding-bottom: 60px;
  color: ${props => props.theme.colors.white};
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 3rem;
  text-shadow: 2px 4px 0 ${props => props.theme.colors.accent};
`;
