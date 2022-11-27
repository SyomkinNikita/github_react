import styled from "styled-components";

type TFlexProps = {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
};

export const Flex = styled.div<TFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
`;
