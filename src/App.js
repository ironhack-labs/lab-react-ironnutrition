import foods from './foods.json';
import { Row, Divider, Button, Alert } from 'antd';
import { useState } from 'react';
import './App.css';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchFood from './components/SearchFood';

function App() {
  const [foodsList, setFoodsList] = useState(foods);
  const [showAddFood, setShowAddFood] = useState(false);

  const addFoodEntry = (newFood) => {
    const foodsListCopy = [newFood, ...foodsList];

    setFoodsList(foodsListCopy);
  };

  const deleteFoodEntry = (foodToDeleteName) => {
    const foodsListCopy = foodsList.filter(
      (elm) => elm.name !== foodToDeleteName
    );

    setFoodsList(foodsListCopy);
  };

  const searchFood = (query) => {
    const filteredFoods = foodsList.filter((elm) => {
      return elm.name.toLowerCase().includes(query.toLowerCase())
     })
  }

  const formState = () => {
    if (showAddFood) {
      setShowAddFood(false);
    } else {
      setShowAddFood(true);
    }
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}

      {showAddFood && <AddFoodForm callbackToAddFoodEntry={addFoodEntry} />}

      {showAddFood ? (
        <Button onClick={formState}> Hide Form </Button>
      ) : (
        <Button onClick={formState}> Add New Food </Button>
      )}

      {/* Display Search component here */}

      <SearchFood callbackToSearchFood={searchFood}/>

      <Divider>Food List</Divider>

      {foodsList.length === 0 && (
        <div>
          <Alert
            message="Info"
            description="Oops! There is no more content to show."
            type="info"
            showIcon
          />
          <Alert
            message="Success Tips"
            description="Come to Ironhack!! We will give you pizza!"
            type="success"
            showIcon
          />
          <Alert
            message="If you are nice, Ale might get you a gintonic🤫"
            type="success"
            showIcon
          />
        </div>
      )}

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodsList.map((elm, index) => {
          return (
            <FoodBox
              key={index}
              foodsDetails={elm}
              callbackToDelete={deleteFoodEntry}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
