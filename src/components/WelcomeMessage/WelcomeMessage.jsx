import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  ModalBackdrop,
  Modal,
  ModalContent,
  ModalTitle,
  ModalText,
  PopcornIcon,
  CloseBtn,
  CloseIcon,
} from './WelcomeMessage.styled';

const modalRoot = document.querySelector('#modal-root');

const WelcomeMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShowMessage(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setShowMessage(false);
    }
  };

  const handleClose = () => {
    setShowMessage(false);
  };

  return createPortal(
    showMessage && (
      <ModalBackdrop onClick={handleBackdropClick}>
        <Modal>
          <ModalContent>
            <ModalTitle>
              Welcome to Get Movie App, where we bring the magic of movies
              straight to your screen!
            </ModalTitle>
            <PopcornIcon size="40" />

            <ModalText>
              Grab your popcorn, get cozy, and let the movie marathon begin.
              Lights, camera, action, and lots of laughs await you! Enjoy the
              show and remember, in this app, you're the star of your
              movie-watching experience. Lights off, fun on!
            </ModalText>
            <CloseBtn onClick={handleClose}>
              <CloseIcon size="20" />
            </CloseBtn>
          </ModalContent>
        </Modal>
      </ModalBackdrop>
    ),
    modalRoot
  );
};

export default WelcomeMessage;
