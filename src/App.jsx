import FoodList from "./components/FoodList";
import { Row, Divider } from "antd";

function App() {
  return (
    <div className="App">
      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        <FoodList />
      </Row>
    </div>
  );
}

export default App;
