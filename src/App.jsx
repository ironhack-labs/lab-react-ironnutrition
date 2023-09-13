import FoodList from "./components/FoodList";
import { Divider, Row } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {/* Render the list of Food Box components here */}
        <FoodList />
      </Row>
    </div>
  );
}

export default App;
