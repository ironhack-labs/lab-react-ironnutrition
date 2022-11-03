import rawFoods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { v4 as uuidv4 } from 'uuid';
import SearchBar from './components/SearchBar';

import { Collapse } from 'antd';
import FeedbackMessage from './components/FeedbackMessage';
const { Panel } = Collapse;

let foodsWithIds = rawFoods.map((food) => ({ ...food, _id: uuidv4() }));

function App() {
  const [food, setFood] = useState(foodsWithIds);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    setFood(updatedFood);
  };

  // Delete Food
  const handleClickDelete = (id) => {
    const foodToDelete = food.findIndex((obj) => obj.id === id);
    const foodMinusOne = [...food];
    foodMinusOne.splice(foodToDelete, 1);
    setFood(foodMinusOne);
  };

  return (
    <>
      <h1 className="flex">Food List</h1>
      <Collapse accordion style={{ width: '35%' }}>
        <Panel header="Add Food" key="1">
          <AddFoodForm setFood={setFood} addNewFood={addNewFood} />
        </Panel>
        <Panel header="Search Food" key="2">
          <SearchBar {...{ handleSearch, searchInput }} />
        </Panel>
      </Collapse>
      {food.length === 0 && <FeedbackMessage />}
      <div className="flex">
        {food
          // eslint-disable-next-line array-callback-return
          .filter((food) => {
            if (searchInput === '') {
              return food;
            } else if (
              food.name.toLowerCase().includes(searchInput.trim().toLowerCase())
            ) {
              return food;
            }
          })
          .map((food) => {
            return (
              <FoodBox
                key={food._id}
                handleClickDelete={handleClickDelete}
                food={{
                  name: food.name,
                  calories: food.calories,
                  image: food.image,
                  servings: food.servings,
                }}
              />
            );
          })}
      </div>
    </>
  );
}
export default App;
