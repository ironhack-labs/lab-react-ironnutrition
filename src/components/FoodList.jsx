import FoodBox from "./FoodBox";
import { Row } from "antd";

function FoodList({ list, handleDelete }) {
  return (
    <Row style={{ width: "100%", justifyContent: "center" }}>
      {list.map((food) => (
        <FoodBox key={food.id} food={food} handleDelete={handleDelete} />
      ))}
    </Row>
  );
}

export default FoodList;
