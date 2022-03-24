import FoodItem from './FoodItem';

const FoodBox = ({ foods }) => {
  return (
    <div className="box">
      {foods.map((food) => (
        <FoodItem key={foods.index} {...food} />
      ))}
    </div>
  );
};

export default FoodBox;
