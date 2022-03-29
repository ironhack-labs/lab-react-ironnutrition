import FoodItem from './FoodItem';
import TodayFood from './todayFood/TodayFood';

const FoodBox = ({ foods, addTodayFood }) => {
  return (
    <div className="columns">
    <div className="column">
      {foods.map((food) => (
        <FoodItem key={foods.index} addTodayFood={ ()=> addTodayFood(food) } {...food} />
      ))}
    </div>
    <div className="box">
<TodayFood/>
    </div>

    </div>
  );
};

export default FoodBox;
