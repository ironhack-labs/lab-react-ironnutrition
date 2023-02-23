import { Button } from 'antd';

const FoodBox = ({ calories, servings, name, image, onDelete }) => {
  return (
    <div>
      <img src={image} alt={name} width={300}></img>
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <strong>Total calories: </strong> {calories} kcal
      </p>
      <Button type="submit" onClick={() => onDelete()}>
        Delete
      </Button>
    </div>
  );
};

export default FoodBox;
