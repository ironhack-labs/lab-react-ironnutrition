// Code After styling Added
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { food, clickToDelete } = props;

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.servings * food.calories} kcal</b>
        </p>
        <Button type="primary" onClick={() => clickToDelete(food.id)}>Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;



// Code before styling added
// function FoodBox(props) {
//   const {food, clickToDelete} = props;
//   return (
//     <div>
//       <p>{food.name}</p>
//       <img src={food.image} width="250" height="250" />
//       <p>{food.calories}</p>
//       <p>{food.servings}</p>
//       <p>
//         <b>Total Calories: {food.servings * food.calories} </b> kcal
//       </p>
//       <button onClick={()=> clickToDelete(food.id)}>Delete</button>
//     </div>
//   );
// }

// export default FoodBox;
