import React, { useState } from "react";

import { Button, Flex, Input } from "antd";

function AddFoodForm(props) {
  const { foods, setFoods, allFoods, setAllFoods } = props;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmission = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
      id: image,
    };

    setFoods([newFood, ...foods]);
    setAllFoods([newFood, ...allFoods]);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  const buttonStyle = {
    marginTop: "40px",
  };

  return (
    <form onSubmit={handleSubmission}>
      <Flex vertical="true" align="center" justify="center" gap="5px">
        <label>
          <Flex vertical>
            Name
            <Input
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
            ></Input>
          </Flex>
        </label>
        <label>
          <Flex vertical>
            Image
            <Input
              type="text"
              name="image"
              onChange={(e) => {
                setImage(e.target.value);
              }}
              value={image}
              required
            ></Input>
          </Flex>
        </label>
        <label>
          <Flex vertical>
            Calories
            <Input
              type="number"
              name="calories"
              onChange={(e) => {
                setCalories(e.target.value);
              }}
              value={calories}
              required
            ></Input>
          </Flex>
        </label>
        <label>
          <Flex vertical>
            Servings
            <Input
              type="number"
              name="servings"
              onChange={(e) => {
                setServings(e.target.value);
              }}
              value={servings}
              required
            ></Input>
          </Flex>
        </label>
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          style={buttonStyle}
        >
          Create
        </Button>
      </Flex>
    </form>
  );
}

export default AddFoodForm;
