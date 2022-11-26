import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 12px;
  grid-column-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  max-width: 880px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-row-gap: 24px;
    grid-column-gap: 24px;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    min-width: 880px;
    max-width: 880px;
    margin: 0 auto;
  }

  @media (min-width: 1280px) {
    grid-row-gap: 40px;
    grid-column-gap: 32px;
    max-width: 1152px;
  }

  @media (min-width: 1440px) {
    grid-column-gap: 52px;
    max-width: 1292px;
  }
`;
