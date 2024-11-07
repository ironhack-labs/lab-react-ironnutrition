const FoodBox = ({ food, deleteFood }) => {
  return (
    <div className="foodbox">
      <h1>{food.name}</h1>

      <img src={food.image} />

      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>

      <p>
        <b>Total Calories: {food.calories * food.servings} kcal </b>
      </p>

      <button onClick={() => deleteFood(food.id)}>Delete</button>
    </div>
  );
};
export default FoodBox;

// import { Card, Col, Button } from "antd";

// const FoodBox = ({ food, deleteFood }) => {
//   return (
//     <Col>
//       <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
//         <img src={food.image} height={60} alt="food" />
//         <p>Calories: {food.calories}</p>
//         <p>Servings {food.servings}</p>
//         <p>
//           <b>Total Calories: {food.calories * food.servings}</b> kcal
//         </p>
//         <Button type="primary" onClick={() => deleteFood(food.id)}>
//           {" "}
//           Delete{" "}
//         </Button>
//       </Card>
//     </Col>
//   );
// };
// export default FoodBox;
