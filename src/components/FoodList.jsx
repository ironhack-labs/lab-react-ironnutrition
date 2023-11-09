import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodList(props) {
  return (
    <>
      <AddFoodForm
        foodsArray={props.foodsArray}
        callbackToSetFoods={props.callbackToSetFoods}
      />
      {props.noResultsDiv}
      {props.foodsArray.map((elm) => {
        return (
          <FoodBox
            key={elm.id}
            food={{
              id: elm.id,
              name: elm.name,
              calories: elm.calories,
              image: elm.image,
              servings: elm.servings,
            }}
            callbackToDelete={props.callbackToDeleteItem}
          />
        );
      })}
    </>
  );
}

export default FoodList;
