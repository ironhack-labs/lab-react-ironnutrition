import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button } from 'antd';
function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [allFoodsData, setAllFoodsData] = useState(foods);

  const addNewFood = function (newFood) {
    const updatedFoods = [...allFoods, newFood];
    const updatedAllFoodsData = [...allFoodsData, newFood];
    setAllFoods(updatedFoods);
    setAllFoodsData(updatedAllFoodsData);
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />

      {/* <Button> Hide Form / Add New Food </Button> */}

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFoods.map((food) => {
          return <FoodBox food={food} />;
        })}
      </Row>
    </div>
  );
}

export default App;
