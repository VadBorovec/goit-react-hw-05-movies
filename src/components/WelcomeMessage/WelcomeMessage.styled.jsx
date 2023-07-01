import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import { GiPopcorn } from 'react-icons/gi';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 250px;
  max-width: 600px;
  width: 90%;
  padding: 0.75rem;
  margin: 1rem;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.colors.light};
  text-shadow: 1px 2px 0 ${props => props.theme.colors.dark};
`;

export const ModalTitle = styled.h2`
  padding-top: 2.5rem;
  margin: 0;
`;

export const ModalText = styled.p`
  margin-bottom: 0.2rem;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 5px;
  right: 5px;
`;

export const CloseIcon = styled(MdClose)`
  color: ${props => props.theme.colors.light};
  &:hover {
    color: ${props => props.theme.colors.dark};
  }
`;

export const PopcornIcon = styled(GiPopcorn)`
  padding: 0.4rem;
  color: ${props => props.theme.colors.light};
  &:hover {
    color: ${props => props.theme.colors.dark};
  }
`;
