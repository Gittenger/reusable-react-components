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

  & > .active-tab-line {
    transform: translateY(0);
  }
`;

const normalStyles = css`
  position: relative;
  overflow-y: hidden;

  & > .active-tab-line {
    position: absolute;
    bottom: 0;
    left: 0;
    transition: transform 0.1s;
    transform: translateY(100px);
    height: 2px;
    width: 100%;
    background: blue;
  }
`;

export const TabButton = styled.div`
  color: #000000;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    color: #000000;
  }

  ${normalStyles}

  &.active {
    ${activeStyles}
  }
`;
