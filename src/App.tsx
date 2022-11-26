import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "pages/Main";
import { AboutPage } from "pages/About";
import { Header } from "components";

const App: FC = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  </>
);

export default App;
