import FoodBox from "./FoodBox";
import { Divider } from "antd";

const FoodList = ({ food, handleDelete }) => {
  return (
    <>
      <Divider>Food List</Divider>
      <FoodBox food={food} handleDelete={handleDelete} />
    </>
  );
};
export default FoodList;
