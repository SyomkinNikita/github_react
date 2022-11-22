import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import 'regenerator-runtime'
import "./styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <StrictMode>
  </StrictMode>
);

if (module.hot) {
  module.hot.accept();
}
