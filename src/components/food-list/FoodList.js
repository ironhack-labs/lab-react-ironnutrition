import './FoodList.css';
import FoodBox from '../food-box/FoodBox';

function FoodList({ foods, setFoods }) {
  return (
    <div className="food-list row justify-content-start">
      {foods.map(food => <FoodBox key={food.name} {...food} setFoods={setFoods} foods={foods}/>)}
    </div>
  );
}

export default FoodList;