import React, { FC, useState } from "react";
import { useQuery } from "@apollo/client";
import { FEED_QUERY } from "api";


const App: FC = () => {
  const first = 20;
  const [location, setLocation] = useState("location:russia");
  const [currentCountry, setCurrentCountry] = useState("russia");
  const [searchValue, setSearchValue] = useState("");

  const { loading, data, fetchMore } = useQuery(FEED_QUERY, {
    variables: { first, location },
  });

  console.log(loading, data, fetchMore)
  return (
    <div>
      <div></div>
    </div>
  );
};

export default App;
