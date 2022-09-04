import { Row } from 'antd';
import FoodBox from '../src/components/food-box/FoodBox';
import './App.css';
import foods from "./data/foods.json"

function App() {
  return (
    <div className="App">
      <Row style={{ width: "100%", justifyContent: "center"}} >
        {foods.map((food) => (
          <FoodBox {...food}/>
        ))}
      </Row>
        hola
      
    </div>
  );
}

export default App;
