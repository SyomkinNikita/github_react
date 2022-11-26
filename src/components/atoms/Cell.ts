import styled from "styled-components";

type TCell = {
  rowEnd: number;
  columnEnd: number;
};

export const Cell = styled.div<TCell>`
  grid-row-end: span 1;
  grid-column-end: span 2;

  @media (min-width: 1024px) {
    grid-column-end: ${({columnEnd}) => columnEnd ? `span ${columnEnd}` : 12};
  }
`;
