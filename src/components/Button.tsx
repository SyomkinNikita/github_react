import React, { FC } from "react";
import styled from "styled-components";

const Button: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
