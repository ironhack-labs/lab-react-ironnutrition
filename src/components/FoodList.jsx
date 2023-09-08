import FoodBox from "./FoodBox";

const FoodList = ({ foods, setFoods }) => {
  const handleDelete = (index) => {
    const foodsCopy = [...foods];
    foodsCopy.splice(index, 1);
    setFoods(foodsCopy);
  };

  return (
    <div className="Food">
      {foods.map((food, index) => (
        <FoodBox
          key={index}
          name={food.name}
          image={food.image}
          calories={food.calories}
          servings={food.servings}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};

export default FoodList;
