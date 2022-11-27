import styled from "styled-components";

type THeadingProps = {
  marginBottomMob?: number;
  marginBottomDesktop?: number;
  isTextAlignCenter?: boolean;
};

export const Heading = styled.div<THeadingProps>`
  font-size: 24px;
  line-height: 28px;
  margin-bottom: ${({ marginBottomMob }) =>
    marginBottomMob ? marginBottomMob : 52}px;
  text-align: ${({ isTextAlignCenter }) => isTextAlignCenter && "center"};

  @media (min-width: 1024px) {
    font-size: 32px;
    line-height: 36px;
    margin-bottom: ${({ marginBottomDesktop }) =>
      marginBottomDesktop ? marginBottomDesktop : 52}px;
  }
`;
