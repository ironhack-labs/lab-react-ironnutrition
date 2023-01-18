import foodsFromJson from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodsArray, setFoodsArray] = useState(foodsFromJson);
  const [searchQuery, setSearchQuery] = useState('');

  const createMeal = (newMealObj) => {
    setFoodsArray((prevListOfMeal) => {
      const newList = [newMealObj, ...prevListOfMeal];
      return newList;
    });
  };

  const deleteMeal = (mealToDelete) => {
    const newListOfMeals = foodsArray.filter((food) => {
      return food.name !== mealToDelete;
    });
    setFoodsArray(newListOfMeals);
  }

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      {/* <AddFoodForm callbackToCreate={createMeal}/> */}

      {showForm && <AddFoodForm callbackToCreate={createMeal}/>}

      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide' : 'Show'} Form
      </Button>

    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

    <Divider className='divider'>Food List</Divider>

      <Row className='items'>
      {foodsArray
      .filter((food) => (
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
      ))
      // index
      .map((food) => (
          <FoodBox key={food.name} food={food} deleteMeal={deleteMeal}/>
      ))}

      {!foodsArray.length && <h2>Oops! There is no more content to show!</h2>}
      </Row>
    </div>
  );
}

export default App;
