import "./App.css";
import FoodList from "./components/FoodList";
import { Row, Divider } from "antd";


function App() {

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <FoodList />
      </Row>

    </div>
  );
}

export default App;
