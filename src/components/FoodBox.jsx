// Your code hereimport { Card } from "antd";

export default function FoodBox({ foodArray, handleDelete }) {
  return (
    <Card>
      {foodArray.map((food, index) => (
        <div className="food-container" key={index}>
          <p name="name">{food.name}</p>
          <img referrerPolicy="no-referrer" src={food.image} alt="food-image" />
          <p> Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.servings * food.calories} </b> kcal
          </p>
          <button onClick={() => handleDelete(food.id)}>Delete</button>
        </div>
      ))}
    </Card>
  );
}