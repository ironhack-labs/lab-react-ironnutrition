import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import _ from "lodash";

import "./App.css";

import { Header } from "./layout/Header";
import { Main } from "./layout/Main";

import foods from "../public/data/foods.json";

export const App = () => {
  const [list, setList] = useState([...foods]);

  const handleSearch = query =>
    setList(_.filter(foods, e => e.name.match(new RegExp(query, "igm"))));

  const handleList = newFood => {
    foods.unshift(newFood);
    const newList = [...list];
    newList.unshift(newFood);
    setList(newList);
  };

  return (
    <>
      <Header setSearch={query => handleSearch(query)} />
      <Router>
        <Switch>
          <Main list={list} addFood={handleList}></Main>
        </Switch>
      </Router>
    </>
  );
};
