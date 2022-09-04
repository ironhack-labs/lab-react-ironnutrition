import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import { Divider, Row } from "antd";

function App() {
  return (
    <div className="App">
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsData.map((food) => (
          <FoodBox {...food}/>
        ))}
      </Row>
    </div>
  );
}

export default App;
