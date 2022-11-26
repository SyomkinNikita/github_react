import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 70px;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  opacity: 0.8;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  padding: 0 30px;
`;

const Heading = styled.h2`
  font-weight: 500;
  & > a {
    text-decoration: none;
    color: aliceblue;
  }
`;

const ListUL = styled.ul`
  display: flex;
`;

const ListLI = styled.li`
  list-style-type: none;
  padding: 10px;

  & > a {
    text-decoration: none;
    color: aliceblue;
  }
`;

export const Styled = {
  Header,
  Navbar,
  Heading,
  ListUL,
  ListLI,
};
