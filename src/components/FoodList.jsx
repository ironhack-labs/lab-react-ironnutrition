import { Divider } from "antd";
import FoodBox from "./FoodBox";

function FoodList({ foods, onDeleteFood }) {
  return (
    <>
    <Divider>Food List</Divider>
      {foods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          onDeleteFood={onDeleteFood}
        />
      ))}
    </>
  );
}

export default FoodList;
