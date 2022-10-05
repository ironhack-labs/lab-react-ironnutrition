import './App.css';
import 'antd/dist/antd.min.css';
import { useState } from 'react';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox.js';
import AddFoodForm from './components/AddFoodForm.js';
import SearchBar from './components/SearchBar';

function App() {
  const [food, setFood] = useState([...foods]);
  const [search, setSearch] = useState('');
  const deleteFoodCard = (foodName) => {
    const removeFood = food.filter((oldFood) => oldFood.name !== foodName);
    setFood(removeFood);
  };

  return (
    <div className="App">
      <AddFoodForm setFood={setFood} food={food} />
      <Button> Add New Food </Button>
      <SearchBar search={search} setSearch={setSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food
          .filter((food) => {
            return food.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((food) => {
            return (
              <FoodBox
                key={food.name}
                food={food}
                deleteFoodCard={deleteFoodCard}
              />
            );
          })}
      </Row>
    </div>
  );
}

export default App;
