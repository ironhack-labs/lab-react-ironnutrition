import React from "react";
import { Container, Contain } from "../public/styles/Common.styles";
import { FoodBox } from "./components/FoodBox";
import { FoodsContextProvider } from "./context/Context";
import { FormAddBox } from "./components/FormBox";
import { Search } from "./components/Search";

export const App = () => (
  <FoodsContextProvider>
    <Container>
      <h1>IronNutritions</h1>
      <Search />
      <Contain>
        <div className="box">
          <FoodBox />
        </div>
        <div className="box">
          <p>Aqui iria la otra cosa</p>
        </div>
      </Contain>
      <FormAddBox />
    </Container>
  </FoodsContextProvider>
);
