import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredList, setFilteredList] = useState(foods);
  const [showForm, setShowForm] = useState(true);

  function searchFood(input) {
    let newFilteredList;
    if (input === '') {
      newFilteredList = [...foodList];
    } else {
      newFilteredList = foodList.filter((food) => {
        return food.name.toLowerCase().includes(input.toLowerCase());
      });
    }

    setFilteredList(newFilteredList);
  }

  function addNewFood(newFood) {
    const updatedFoods = [newFood, ...foodList];
    setFoodList(updatedFoods);
  }

  function deleteFood(foodId) {
    console.log('deletinggg');
    const copyList = [...filteredList];
    const newFoodList = copyList.filter((food) => {
      return food.name !== foodId;
    });
    setFilteredList(newFoodList);
  }

  return (
    <div className="App">
      {/* Search */}
      <Divider>Search</Divider>
      <Search search={searchFood} />

      {/* Add food */}
      <Divider>Add Food Entry</Divider>
      <AddFoodForm addFood={addNewFood} showForm={showForm} />

      {/* Toggle Show/Hide Form */}
      <Button
        htmlType="submit"
        style={{ display: 'flex', textAlign: 'left', margin: '0 3rem' }}
        onClick={() => setShowForm(!showForm)}
      >
        Hide Form
      </Button>

      {/* Render the food list */}
      <Divider>Food List</Divider>
      {filteredList.length ? (
        <Row>
          {filteredList.map((food) => {
            return (
              <FoodBox
                key={food.name}
                food={{
                  name: food.name,
                  calories: food.calories,
                  image: food.image,
                  servings: food.servings,
                }}
                deleteFood={deleteFood}
              />
            );
          })}
        </Row>
      ) : (
        <h3>Oops! There is no more content to show.</h3>
      )}
    </div>
  );
}

export default App;
