import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Styled } from "./styled";

export const Header: FC = () => {
  return (
    <Styled.Header>
      <Styled.Navbar>
        <Styled.Heading>
          <Link to="/">Github repo</Link>
        </Styled.Heading>
        <nav>
          <Styled.ListUL>
            <Styled.ListLI>
              <Link to="/">Home</Link>
            </Styled.ListLI>
            <Styled.ListLI>
              <Link to="/about">About</Link>
            </Styled.ListLI>
          </Styled.ListUL>
        </nav>
      </Styled.Navbar>
    </Styled.Header>
  );
};
