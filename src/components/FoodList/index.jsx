import './index.css';
import { FoodBox } from '../FoodBox';

export const FoodList = ({ foods }) => {
  return (
    <div className="FoodList">
      <h1>Food List</h1>
      <div className='CardList'>
      {foods.map((food) => {
        return (
          <div key={food.name}>
            <FoodBox food={food} />
          </div>
        );
      })}
      </div>
    </div>
  );
};
