import React, { FC } from "react";
import { FaUser, FaUsers } from "react-icons/fa";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { TUser } from "localTypes";
import { Styled } from "./styled";

type TUserProps = {
  user: TUser;
};

export const User: FC<TUserProps> = ({ user }) => (
  <Styled.UserCard>
    <Styled.UserDetail>
      <img src={user.avatarUrl} alt={user.name} />

      <Styled.UserInfo>
        <Styled.UserName>{user.name}</Styled.UserName>
        <Styled.UserInfoDetail>
          <Styled.CircleIcon>
            <FaUser size={15} />
          </Styled.CircleIcon>
          <div>
            <span>Username</span>
            <span>{user.login}</span>
          </div>
        </Styled.UserInfoDetail>
        <Styled.UserInfoDetail>
          <Styled.CircleIcon>
            <FaUsers size={15} />
          </Styled.CircleIcon>
          <div>
            <span>Followers </span>
            <span>{user?.followers?.totalCount}</span>
          </div>
        </Styled.UserInfoDetail>
        <Styled.UserInfoDetail>
          <Styled.CircleIcon>
            <RiGitRepositoryCommitsFill size={15} />
          </Styled.CircleIcon>
          <div>
            <span>Repositories </span>
            <span>{user.repositories.totalCount}</span>
          </div>
        </Styled.UserInfoDetail>
      </Styled.UserInfo>
    </Styled.UserDetail>

    <Styled.Actions>
      <Styled.ActionsButton>View profile</Styled.ActionsButton>
      <Styled.ActionsButton>Follow</Styled.ActionsButton>
    </Styled.Actions>
  </Styled.UserCard>
);
