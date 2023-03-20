import FoodBox from '../FoodBox/FoodBox';
import './FoodList.css';

const FoodList = ({ foods, deleteBtn }) => {
  return (
    <div className="FoodList">
      {foods.map((food) => (
        <div key={food.name}>
          <FoodBox {...food} btnAction={deleteBtn} />
        </div>
      ))}
    </div>
  );
};
export default FoodList;
