import React, { FC, useState } from "react";
import { useQuery } from "@apollo/client";
import { FEED_QUERY } from "api";
import { TGithubGraphQL } from "types";
import {
  Cell,
  GridContainer,
  Heading,
  Input,
  SelectCountry,
  Flex,
  User,
  Spacer,
} from "components";

export const MainPage: FC = () => {
  const first = 20;
  const [location, setLocation] = useState("location:russia");
  const [currentCountry, setCurrentCountry] = useState("russia");
  const [searchValue, setSearchValue] = useState("");

  const { loading, data, fetchMore } = useQuery(FEED_QUERY, {
    variables: { first, location },
  });

  data as TGithubGraphQL;

  console.log(data?.search.edges.map((item: any) => item.node));
  return (
    <main>
      <GridContainer>
        <Cell columnEnd={12} rowEnd={1}>
          <Heading as="h1" isTextAlignCenter>
            Github Repositories
          </Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Input
              setLocation={setLocation}
              setSearchValue={setSearchValue}
              currentCountry={currentCountry}
            />
            <SelectCountry
              setLocation={setLocation}
              currentCountry={currentCountry}
              setCurrentCountry={setCurrentCountry}
            />
          </Flex>
        </Cell>
      </GridContainer>
      <Spacer spaceMob={32} spaceDesktop={52} />
      <GridContainer>
        {data?.search.edges.map((item: any) => (
          <Cell columnEnd={4} rowEnd={1} key={item.cursor}>
            <User user={item.node} />
          </Cell>
        ))}
      </GridContainer>
    </main>
  );
};
