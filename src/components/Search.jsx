import React, { useState } from "react";
import { Flex, Input } from "antd";

function Search(props) {
  const [userInput, setUserInput] = useState("");

  const { foods, setFoods, allFoods } = props;

  // stopped here.
  const filterFoods = (value) => {
    setUserInput(value);
    const filteredFoods = allFoods.filter((food) => {
      return food.name.toLowerCase().startsWith(value);
    });
    // console.log(filteredFoods);
    setFoods(filteredFoods);
  };

  const boxStyle = {
    marginTop: "40px",
  };

  return (
    <label>
      <Flex vertical style={boxStyle} gap="5px">
        Search
        <Input
          type="text"
          onChange={(e) => {
            filterFoods(e.target.value);
          }}
          value={userInput}
        ></Input>
      </Flex>
    </label>
  );
}

export default Search;
