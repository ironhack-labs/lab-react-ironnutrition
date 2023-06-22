import foods from './foods.json';

import { Row, Divider, Button } from 'antd';

import { useState } from 'react';
import { FoodBox } from './components/FoodBox';
import { AddFoodForm } from './components/AddFoodForm';
import { SearchBar } from './components/SearchBar';

export function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foodList);

  const addFood = (newFood) => {
    setFoodList([newFood, ...foodList]);
    setFilteredFoodList([newFood, ...filteredFoodList]);
  };

  const deleteFood = (foodName) => {
    setFoodList((foodList) => {
      return foodList.filter((food) => {
        return food.name !== foodName;
      });
    });

    setFilteredFoodList((filteredFoodList) => {
      return filteredFoodList.filter((food) => {
        return food.name !== foodName;
      });
    });
  };

  const searchByName = (query) => {
    setFilteredFoodList(
      foodList.filter((food) =>
        food.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />

      <Button> Hide Form / Add New Food </Button>

      <SearchBar searchByName={searchByName} />

      <Divider>Food List</Divider>

      <Row
        style={{
          width: '100%',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {/* tried rendering the filteredFoodList (like the video) but this is bugged. if I render foodList, the list does not go back to the original after filtering. */}
        {filteredFoodList.map((food, index) => {
          return (
            <FoodBox
              key={'FoodBox: ' + index}
              food={food}
              deleteFood={deleteFood}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
