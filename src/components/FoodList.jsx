import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
function FoodList({ foods, handleDelete, addFood }) {
  return (
    <div>
      <AddFoodForm addFood={addFood} />
      {foods.map((oneFood) => {
        return (
          <FoodBox
            key={oneFood.id}
            handleDelete={handleDelete}
            food={oneFood}
          />
        );
      })}
    </div>
  );
}

export default FoodList;
