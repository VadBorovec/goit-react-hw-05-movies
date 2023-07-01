import styled from '@emotion/styled';

export const Section = styled.section`
  margin-bottom: 1rem;
  padding: 1rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 16px;
`;

export const CardWrapper = styled.div`
  position: relative;
`;

export const ImgPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.white};
  text-shadow: 1px 2px 0 ${props => props.theme.colors.accent};
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const ErrorWraper = styled.div`
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
  font-size: 24px;
  margin-bottom: 0.5rem;
`;

export const ErrorText = styled.p`
  color: ${props => props.theme.colors.light};
  font-size: 18px;
`;
