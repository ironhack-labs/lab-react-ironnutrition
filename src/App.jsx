import logo from './logo.svg';
import './App.css';
import { Row } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div>
      <h1>Food List</h1>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => {
          return (
            <FoodBox
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
