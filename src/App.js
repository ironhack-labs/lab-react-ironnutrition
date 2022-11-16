import './App.css';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';

import allFoods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(allFoods);
  const [showFoods, setShowFoods] = useState(allFoods);
  const [show, setShow] = useState(true);

  const createFood = (food) => {
    const newFoods = [food, ...foods];
    setFoods(newFoods);
    setShowFoods(newFoods);
  };

  const deleteFood = (foodName) => {
    const filteredFoods = foods.filter((food) => food.name !== foodName);
    setFoods(filteredFoods);
    setShowFoods(filteredFoods);
  };

  const filterFoods = (searchQuery) => {
    let filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setShowFoods(filteredFoods);
  };

  const toggleVisibility = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <Search filterFoods={filterFoods} />
      {show && <AddFoodForm createFood={createFood} />}
      <Button onClick={toggleVisibility} style={{ margin: '10px' }}>
        {show ? 'Hide Form' : 'Add New Food'}
      </Button>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFoods.length ? (
          showFoods.map((food) => {
            return (
              <FoodBox food={food} key={food.name} deleteFood={deleteFood} />
            );
          })
        ) : (
          <div>
            <h3>Oops! There is no more content to show!</h3>
            <img
              src="https://img.freepik.com/free-vector/red-prohibited-sign-no-icon-warning-stop-symbol-safety-danger-isolated-vector-illustration_56104-912.jpg?w=2000"
              alt=""
              width="300"
            />
          </div>
        )}
      </Row>
    </div>
  );
}

export default App;
