import styled, { css } from "styled-components";

const primaryStyles = css`
  background-color: #4690da;

  &:hover {
    background: #6ea5db radial-gradient(circle, transparent 1%, #6ea5db 1%)
      center/20000%;
  }

  &:active {
    background-color: #99bbdd;
  }
`;

const secondaryStyles = css`
  background-color: #02ad35;

  &:hover {
    background: #36af5a radial-gradient(circle, transparent 1%, #36af5a 1%)
      center/20000%;
  }

  &:active {
    background-color: #75b889;
  }
`;

const warningStyles = css`
  background-color: #cf0808;

  &:hover {
    background: #cc2020 radial-gradient(circle, transparent 1%, #cc2020 1%)
      center/20000%;
  }

  &:active {
    background-color: #b94646;
  }
`;

const getColor = ({ primary, warning, secondary }) =>
  primary
    ? primaryStyles
    : secondary
    ? secondaryStyles
    : warning
    ? warningStyles
    : primaryStyles;

export const CustomButton = styled.button`
  padding: 1.2rem 1.5rem;
  border: none;
  border-radius: 0.3rem;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  box-shadow: 0 0 3px #333;
  outline: none;
  background-position: center;
  transition: background 0.7s;
  ${getColor}

  &:active {
    background-size: 100%;
    transition: background 0s;
  }
`;
