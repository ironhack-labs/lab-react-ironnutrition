import React, { useState } from "react";
import _ from "lodash";

import "./App.css";

import { Header } from "./layout/Header";
import { Main } from "./layout/Main";

import foods from "../public/data/foods.json";

export const App = () => {
  const [list, setList] = useState(foods);

  const handleSearch = query =>
    setList(_.filter(foods, e => e.name.match(new RegExp(query, "igm"))));

  return (
    <>
      <Header setSearch={query => handleSearch(query)} />
      <main>
        <Main list={list}></Main>
      </main>
    </>
  );
};
