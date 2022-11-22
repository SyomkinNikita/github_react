import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import "./styles.css";
import Button from "components/Button";
import 'regenerator-runtime'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Text = styled.div`
  color: brown;
  &::after {
    content: url("./sun.jpeg");
    width: 200px;
    height: 200px;
  }
`;

root.render(
  <StrictMode>
    <Text>hdgfhjk</Text>
    <Button>
      <div>kfkfkf</div>
    </Button>
  </StrictMode>
);

if (module.hot) {
  module.hot.accept();
}
