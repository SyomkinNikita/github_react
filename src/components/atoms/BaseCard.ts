import styled from "styled-components";

export const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  color: white;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  @media (min-width: 1024px) {
    padding: 24px;
  }

  @media (min-width: 1280px) {
    padding: 32px;
  }
`;
