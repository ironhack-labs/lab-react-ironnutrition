import React from "react";
import { Container, Contain } from "../public/styles/Common.styles";
import { FoodBox } from "./components/FoodBox";
import { FoodsContextProvider } from "./context/Context";
import { FormAddBox } from "./components/FormBox";
import { Search } from "./components/Search";
import { TodayFood } from "./components/TodayBox";

export const App = () => (
  <FoodsContextProvider>
    <Container>
      <h1>IronNutritions</h1>
      <Search />
      <Contain>
        <div className="box box-item-list">
          <FoodBox />
        </div>
        <div className="box">
          <TodayFood />
        </div>
      </Contain>
      <FormAddBox />
    </Container>
  </FoodsContextProvider>
);
