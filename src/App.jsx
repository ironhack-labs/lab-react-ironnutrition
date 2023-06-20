import Foodlist from "./components/Foodlist";

import { Row } from "antd";

function App() {
  return (
    <div className="App">
      <h1>Food List</h1>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Foodlist />
      </Row>
    </div>
  );
}

export default App;
