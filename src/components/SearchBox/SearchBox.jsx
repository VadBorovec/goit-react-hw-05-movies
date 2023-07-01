import { useEffect, useState } from 'react';
import {
  Wrapper,
  FunnyMessage,
  InputWrapper,
  Input,
  Icon,
} from './SearchBox.styled';

const SearchBox = ({ value, onChange }) => {
  const [randomFunnyMessage, setRandomFunnyMessage] = useState('');
  const funnyMessages = [
    'Searching for hilarious movies...',
    `Lights, camera, action! Searching for movies with ${value}...`,
    `Why did the movie go searching? To find its ${value}...!`,
    'Ready to find the perfect movie?',
    `In search of a blockbuster movie with ${value}...`,
    'Searching for movies like a pro!',
    'Searching for movies to make you laugh out loud!',
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * funnyMessages.length);
    setRandomFunnyMessage(funnyMessages[randomIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <FunnyMessage>{randomFunnyMessage}</FunnyMessage>
      <InputWrapper>
        <Input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="just find it"
        />
        <Icon />
      </InputWrapper>
    </Wrapper>
  );
};

export default SearchBox;
