import React from "react";
import "./App.css";
import FoodList from "./components/FoodList";
import FoodContextProvider from "./contexts/FoodContext";
import FlexContainer from "./components/FlexContainer";

const App = () => {
  return (
    <div className="App">
      <FoodContextProvider>
        <FlexContainer>
          <FoodList />
        </FlexContainer>
      </FoodContextProvider>
    </div>
  );
};

export default App;
