import FoodBox from '../FoodBox/FoodBox';
import './FoodList.css';

const FoodList = ({ foods }) => {
  return (
    <div className="FoodList">
      {foods.map((food) => (
        <div key={food.name}>
          <FoodBox {...food} />
        </div>
      ))}
    </div>
  );
};
export default FoodList;
