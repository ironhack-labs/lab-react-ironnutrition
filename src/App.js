import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';

function App() {
  const [foodToDisplay, setFoodToDisplay] = useState(foods);
  const [searchInput, setSearchInput] = useState('');

  const createFood = (newFood) => {
    const newList = [newFood, ...foodToDisplay];
    setFoodToDisplay(newList);
  };

  //Delete
  const deleteFood = (foodTitle) => {
    const listAfterDelete = foodToDisplay.filter((element) => {
      return element.name !== foodTitle;
    });
    setFoodToDisplay(listAfterDelete);
  };

  //Search
  const searchFood = (search) => {
    setSearchInput(search);
  };

  const searchResult = foodToDisplay.filter((food) => {
    return food.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div className="App">
      <Search callbackToSearch={searchFood} />
      <AddFoodForm callbackToCreate={createFood} />
      <Row
        style={{
          width: '100%',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Divider>Food List</Divider>
        {searchResult.map((food) => {
          return (
            <FoodBox
              className="foodbox"
              oneFood={food}
              callbackToDelete={deleteFood}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
