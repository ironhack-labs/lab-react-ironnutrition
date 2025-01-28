// components/FoodList.jsx
import FoodBox from "./FoodBox";

function FoodList({ foods, deleteFood }) {
  return (
    <div>
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default FoodList;
