import FoodBox from '../FoodBox/FoodBox';

function FoodList(props) {
  const { foods, deleteFood } = props;
  return (
    <div>
      {foods.map((food, index) => {
        return <FoodBox foods={food} deleteFood={deleteFood} />;
      })}
    </div>
  );
}

export default FoodList;
