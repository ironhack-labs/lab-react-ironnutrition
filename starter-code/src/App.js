import React from "react";
import "./App.css";
import { FoodBox } from "./Components/Foodbox";

import "bulma/css/bulma.css";
import { FoodList } from "./Components/FoodList";
// import styled from "styled-components";

// const Beer = styled.div`

export const App = () => {
  return (
    <div>
      <FoodList></FoodList>
    </div>
  );
};
