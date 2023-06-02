import { Card } from 'antd';

function FoodBox({ food, deleteButton }) {
  return (
    <div>
        <Card title={food.name} bordered={false} style={{width: 300,height: 400}}>
          <img src={food.image} alt="" width={100} />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <button onClick={() => {deleteButton(food.name)}}> DELETE</button>
      </Card>
    </div>
  );
}

export default FoodBox;
