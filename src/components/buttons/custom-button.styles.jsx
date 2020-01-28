import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: white;
    color: blue;
    border: 1px solid blue;
    border-radius: 10px;
  }
`;

const invertedButtonStyles = css`
background-color: white;
color: blue;
border: 1px solid blue;
border-radius: 10px;
  &:hover {
    background-color: blue;
    color: white;
    border: none;
    border-radius: 10px;
  }
`;



const getButtonStyles = props => {
  if (props.inverted) {
    return invertedButtonStyles;
  }

  return buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 13rem;
  width: auto;
  padding: .7rem 1.5rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;