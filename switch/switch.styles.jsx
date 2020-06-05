import styled, { css } from "styled-components";

const normalStyles = css`
  & > div:first-child {
    transform: translateX(0);
    background-color: darkgrey;
  }
`;

const activeStyles = css`
  & > div:first-child {
    transform: translateX(1rem);
    background-color: dodgerblue;
  }
`;

export const SwitchContainer = styled.div`
  background-color: lightgrey;
  border-radius: 1rem;
  width: 2.3rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  transform: scale(1);

  ${normalStyles}

  &.active {
    ${activeStyles}
  }
`;

export const SwitchButton = styled.div`
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 50%;
  transition: transform 0.5s;
`;
