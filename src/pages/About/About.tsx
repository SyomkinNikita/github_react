import React, { FC } from "react";
import { Flex, Heading, Spacer } from "components";

export const AboutPage: FC = () => {
  return (
    <>
      <Spacer spaceMob={52} spaceDesktop={52} />
      <Flex alignItems="center" flexDirection="column">
        <Heading isTextAlignCenter>Syomkin Project</Heading>
      </Flex>
    </>
  );
};
