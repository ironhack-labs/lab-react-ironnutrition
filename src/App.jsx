import FoodList from "./components/FoodList";
import { Row, Divider } from "antd";
import "./App.css";

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
