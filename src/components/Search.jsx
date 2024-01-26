import React, { useState } from "react";
import { Flex, Input } from "antd";

function Search(props) {
  const [userInput, setUserInput] = useState("");

  const { foods, setFoods } = props;

  // stopped here.

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
            setUserInput(e.target.value);
          }}
          value={userInput}
        ></Input>
      </Flex>
    </label>
  );
}

export default Search;
