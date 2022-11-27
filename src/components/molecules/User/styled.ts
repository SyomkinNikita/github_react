import styled from "styled-components";
import { BaseCard } from "components/atoms";

const UserCard = styled(BaseCard)`
  background: darkseagreen;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  flex-grow: 1;
`;

const UserDetail = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
  }
`;

const UserName = styled.span`
  font-size: 1.15rem;
  font-weight: bold;
  color: #14213d;
  margin-bottom: 15px;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  word-break: break-all;
`;

const UserInfoDetail = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 15px;
`;

const CircleIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px;
  background-color: #cec8c6;
  border-radius: 50%;
`;

const Actions = styled.div`
  flex: 1;
  border-top: 1px solid #e5e5e5;
  padding-top: 5px;
  display: flex;
  align-items: center;
`;

const ActionsButton = styled.button`
  width: 45%;
  margin: 0 5px;
  align-items: center;
  appearance: none;
  border: 1px solid #dbdbdb;
  border-radius: 0.375em;
  box-shadow: none;
  box-sizing: border-box;
  color: #fca311;
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: center;
  line-height: 1.5;
  padding: calc(0.5em - 1px) 1em;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  &:active {
    border-color: #4a4a4a;
    outline: 0;
  }

  &:focus {
    border-color: #485fc7;
    outline: 0;
  }

  &:hover {
    border-color: #b5b5b5;
  }
`;
export const Styled = {
  UserCard,
  UserDetail,
  UserName,
  UserInfo,
  UserInfoDetail,
  CircleIcon,
  Actions,
  ActionsButton,
};
