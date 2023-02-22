import { Card } from 'antd';

function FoodBox(props) {
  return (
    <Card className="FoodBox">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.calories}</p>
      <input type="number" value={props.quantity} />
      <button>Add to today's foods</button>
    </Card>
  );
}

export default FoodBox;
