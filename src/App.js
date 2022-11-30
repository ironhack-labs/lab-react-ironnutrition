import './App.css';
import { useState } from 'react';
import uuid from 'react-uuid';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchFood from './components/SearchFood';
import FoodBox from './components/FoodBox';
import EmptyListMessage from './components/EmptyListMessage';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);
  const [foodData, setFoodData] = useState(foods);
  const [isDisplayed, setIsDisplayed] = useState(true);

  const submitFood = (newFood) => {
    const copiedFoodlist = [newFood, ...foodsToDisplay];

    setFoodsToDisplay(copiedFoodlist);
  };

  const toggleAddForm = () => {
    setIsDisplayed(!isDisplayed);
  };

  const filterFoodList = (str) => {
    let filteredFoodList;

    if (str === '') {
      filteredFoodList = foodData;
    } else {
      filteredFoodList = foodData.filter((food) => {
        return food.name.includes(str);
      });
    }
    setFoodsToDisplay(filteredFoodList);
  };

  const deleteAndFilter = (foodName) => {
    const listCopy = [...foodsToDisplay];

    let listAfterDelete = listCopy.filter((food) => {
      return food.name !== foodName;
    });

    setFoodsToDisplay(listAfterDelete);
  };

  return (
    <div className="App">
      {isDisplayed && <AddFoodForm submitFood={submitFood} />}
      {isDisplayed ? (
        <Button
          style={{
            border: '2px solid blue',
            color: 'blue',
            backgroundColor: 'white',
            marginTop: 10,
          }}
          onClick={toggleAddForm}
        >
          {' '}
          Hide Form{' '}
        </Button>
      ) : (
        <Button
          style={{
            border: '2px solid blue',
            color: 'blue',
            backgroundColor: 'white',
            marginTop: 10,
          }}
          onClick={toggleAddForm}
        >
          {' '}
          Add New Food
        </Button>
      )}

      <SearchFood filterFoodList={filterFoodList} />

      <Divider>Food List</Divider>
      {foodsToDisplay.length === 0 && <EmptyListMessage />}
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsToDisplay.map((food, index) => {
          return (
            <FoodBox
              key={uuid()}
              deleteFunction={deleteAndFilter}
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
