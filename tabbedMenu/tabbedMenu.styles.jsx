import styled, { css } from "styled-components";

export const TabbedMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const activeStyles = css`
  color: blue;
  border-bottom: 2px blue solid;
`;

const normalStyles = css`
  border-bottom: none;
`;

// const getState = ({ active }) => (active ? activeStyles : normalStyles);

export const TabButton = styled.div`
  color: #111111;

  &:hover {
    cursor: pointer;
    color: #000000;
  }

  ${normalStyles}

  &.active {
    ${activeStyles}
  }
`;
