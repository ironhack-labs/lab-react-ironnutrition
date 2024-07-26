import { Card, Col, Button } from "antd";

const FoodBox = ({ food, onDelete }) => {

  const { id,name, calories, image, servings } = food;
  const totalCalories = servings * calories;
  
const handleDelete = () => {
  onDelete(id);
};
  return (
    <div className="col-12 col-md-6 col-lg-4" >
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories}</b> kcal
        </p>
        <Button type="primary" onClick={handleDelete}> Delete </Button>
      </Card>
    </div>
  );
};

export default FoodBox;