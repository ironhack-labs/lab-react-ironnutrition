import './App.css';
import React, { useState } from 'react';
import initialFoods from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(initialFoods);
  const [foodSearch, setFoodSearch] = useState('');
  const [showForm, setShowForm] = useState(true);

  const addFood = (food) => {
    setFoods([food, ...foods]);
  };

  const getFoodSearch = (search) => {
    setFoodSearch(search);
  };

  const searchFood = (search) => {
    if (search) {
      return foods.filter((food) => {
        return food.name.toLowerCase().includes(search.toLowerCase());
      });
    } else {
      return foods;
    }
  };

  const removeFood = (foodName) => {
    const newList = foods.filter((food) => food.name !== foodName);
    setFoods([...newList]);
  };

  const handleHideForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="App">
      {showForm && <AddFoodForm addFood={addFood} />}
      <Button onClick={handleHideForm} style={{ margin: '25px' }}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      <Search getFoodSearch={getFoodSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {searchFood(foodSearch).length ? (
          searchFood(foodSearch)?.map((food) => {
            return (
              <FoodBox
                food={{
                  name: food.name,
                  calories: food.calories,
                  image: food.image,
                  servings: food.servings,
                }}
                key={food.name}
                removeFood={removeFood}
              />
            );
          })
        ) : (
          <h3>There is no food with that name, try with other name</h3>
        )}
        {!foods.length && <h3>Oops, There is no more contente to Show</h3>}
      </Row>
    </div>
  );
}

export default App;