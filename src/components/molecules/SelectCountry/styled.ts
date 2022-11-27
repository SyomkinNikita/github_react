import styled from "styled-components";

const CountryField = styled.div`
  background-color: #c9510c;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  position: relative;
  width: 200px;
  border-radius: 4px;

  @media (max-width: 720px) {
    width: 50%;
  }

  input {
    background: none;
    height: 50px;
    width: 100%;
    font-size: 1.5rem;
    border: none;
    padding-left: 1.5rem;
    outline: none;
    color: #333;
  }
`;

const Countries = styled.div`
  display: block;
`;

const CountriesList = styled.ul`
  position: absolute;
  top: 3.7rem;
  left: 0px;
  width: 100%;
  list-style: none;
  background-color: #f5f5f5;
  overflow: scroll;
  display: none;
  max-height: 200px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  li {
    padding: 0.5rem 1rem;
    color: #333;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: #fafafa;
    }
  }
`;

export const Styled = {
  CountryField,
  Countries,
  CountriesList,
};
