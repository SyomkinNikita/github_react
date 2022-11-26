import styled from "styled-components";

export const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  color: white;
  height: 100%;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 24px;
  }

  @media (min-width: 1280px) {
    padding: 32px;
  }
`;
