import { Col, Card } from "antd";

function FoodBox({ name, image, calories, servings, handleDelete }) {
  
  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={70} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} kcal</b>
        </p>
        <button onClick={() => handleDelete(name)} className='btn btn-sm btn-danger mt-2'>Delete</button>
      </Card>
    </Col>
  );
}

export default FoodBox;
