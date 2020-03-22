import React from "react";

import "./App.css";

import { Header } from "./layout/Header";
import { Main } from "./layout/Main";

export const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Main></Main>
      </main>
    </>
  );
};
