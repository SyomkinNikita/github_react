import styled from "styled-components";

type TFlexProps = {
  alignItems?: string;
  justifyContent?: string;
};

export const Flex = styled.div<TFlexProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
`;
