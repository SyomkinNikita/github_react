import React, { FC } from "react";

export const Button: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <button>{children}</button>;
};

