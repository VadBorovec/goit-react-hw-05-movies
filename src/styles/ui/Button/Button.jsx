import styled from '@emotion/styled';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: inherit;

  padding: 0.6rem 1rem;
  margin: 0 0.5rem;
  background-color: teal;
  color: #fff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;

  cursor: pointer;
  border: none;
  border-radius: 0.375rem;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: box-shadow 250ms linear;

  :hover {
    background-color: darkcyan;
  }

  :active {
    background-color: lightseagreen;
    box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
