import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { BiSearch } from "react-icons/bi";
import { Styled } from "./styled";

type TInputProps = {
  setLocation: Dispatch<SetStateAction<string>>;
  currentCountry: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export const Input: FC<TInputProps> = ({
  setLocation,
  currentCountry,
  setSearchValue,
}) => {
  let typingTimer: NodeJS.Timeout;

  const searchUsers = (e: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
      setSearchValue(e.target.value);
      setLocation(`${e.target.value} location:${currentCountry}`);
    }, 600);
  };
  return (
    <Styled.Input>
      <BiSearch size="20" color="#2d4042" />
      <input type="text" onChange={searchUsers} placeholder="Search" />
    </Styled.Input>
  );
};
