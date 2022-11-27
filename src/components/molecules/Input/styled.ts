import styled from "styled-components";

const Input = styled.div`
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  flex: 1;
  margin-right: 20px;
  border-radius: 4px;
  @media (max-width: 720px) {
    width: 50%;
  }
  input {
    background: none;
    width: 100%;
    height: 50px;
    font-size: 1.5rem;
    border: none;
    padding-left: 1rem;
    outline: none;
  }
`;

export const Styled = {
  Input,
};
