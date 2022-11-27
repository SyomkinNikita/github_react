import styled from "styled-components";

type TSpacerProps = {
  spaceMob: number;
  spaceDesktop: number;
};

export const Spacer = styled.div<TSpacerProps>`
  margin-bottom: ${({ spaceMob }) => spaceMob && spaceMob}px;

  @media (min-width: 1024px) {
    margin-bottom: ${({ spaceDesktop }) => spaceDesktop && spaceDesktop}px;
  }
`;
