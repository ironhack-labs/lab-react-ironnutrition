import './App.css';
import foods from './foods.json';
import { Row, Divider, Input, Button } from 'antd';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import { useState } from 'react';

function App() {
  const newFoodArray = [...foods];
  const [foodElements, setFoodElements] = useState(newFoodArray);
  const [query, setQuery] = useState('');

  const createFood = (newFood) => {
    setFoodElements((prevFoodElements) => {
      const copyFood = [newFood, ...prevFoodElements];
      return copyFood;
    });
  };

  const deleteFood = (gnochi) => {
    const newList = foodElements.filter((food) => {
      return food.name !== gnochi;
    });
    setFoodElements(newList);
  };

  const search = (e) => {
    setQuery(e.target.value);
    if (e.target.value === '') {
      setFoodElements(newFoodArray);
    } else {
      const searchingFood = foodElements.filter((food) => {
        return food.name.toLowerCase().includes(query);
      });
      setFoodElements(searchingFood);
    }
  };

  return (
    <div className="App">
      <AddFoodForm callbackToCreate={createFood} />

      <Button> Hide Form / Add New Food </Button>

      <div>
        <Divider>Search</Divider>
        <Input
          style={{ width: '30%', justifyContent: 'center' }}
          placeholder="Search here"
          value={query}
          type="text"
          onChange={search}
        />
      </div>

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foodElements.length === 0 ? (
        <h1>YOU ARE ON DIET TODAY</h1>
      ) : (
        <> 
        {foodElements.map((food, index) => (
          <FoodBox callbackDelete={deleteFood} food={food} key={index} />
        ))}
        </>
      )}
      </Row>
    </div>
  );
}

export default App;
