import "./App.css";
import { Row, Divider } from "antd";
import FoodList from "./components/FoodList";

function App() {
 

  return (
    <Row style={{ width: "100%", justifyContent: "center" }}>
      <Divider>Food List</Divider>
      <FoodList/>
    </Row>
  );
}

export default App;
