import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const FunnyMessage = styled.p`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.white};
  text-shadow: 1px 2px 0 ${props => props.theme.colors.accent};
  text-align: center;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  border-color: ${props => props.theme.colors.button};
  font: inherit;
  position: relative;

  &::placeholder {
    color: ${props => props.theme.colors.gray};
  }
`;

export const Icon = styled(HiSearch)`
  fill: ${props => props.theme.colors.button};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  pointer-events: none;
`;
