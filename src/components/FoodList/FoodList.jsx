import FoodCard from '../FoodCard/FoodCard';

const FoodList = ({ foods }) => {
  return (
    <div className="FoodList">
      {foods.map((food) => (
        <div key={food.name} className="col">
          <FoodCard {...food} />
        </div>
      ))}
    </div>
  );
};
export default FoodList;
