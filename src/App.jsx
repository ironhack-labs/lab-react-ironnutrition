import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import FoodList from "./components/FoodList";

import { Row, Divider } from "antd";

function App() {
  return (
    <div className="App">
    

      <Row style={{ width: "100%", justifyContent: "center" }}>
      <FoodList />
      </Row>
    </div>
  );
}

export default App;

