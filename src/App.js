import './App.css';

import NutritionPage from './components/NutritionPage';


function App() {
  return (
    <div className="App">
      <NutritionPage />
    </div>
  );
}

export default App;



/* import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Divider, Row } from "antd";

function App() {
  return (
    <div className="App">
      <AddFoodForm />
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
 */