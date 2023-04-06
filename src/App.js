import './App.css';
import { useState } from "react";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/Search';


function App() {

  const [foodArr, setFoodArr] = useState(foods);
  const [searchFood, setSearchFood] = useState('');
  const [showForm, setShowForm] = useState(false);
  

  const addFood = (newFood) => {
    setFoodArr( (prevFoodArr) => {
      const newList = [newFood, ...prevFoodArr];
      return newList;
    });
  };
  
  const foodSearch = (event) => {
    setSearchFood(event.target.value);
  };

  const filteredFoodItems = foodArr.filter((food) =>
    food.name.toLowerCase().includes(searchFood.toLowerCase())
  );

  const deleteFood = (name) => {
    const newFoodList = foodArr.filter( food => food.name !== name);
    setFoodArr(newFoodList);
  };

  const toggleShowForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
 
  return (
    <div className="App">
      {showForm && <AddFoodForm addFood={addFood} />}
      <Button onClick={toggleShowForm}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>

      <SearchBar searchFood={searchFood} foodSearch={foodSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoodItems.length > 0 ? (filteredFoodItems.map((food) => (
          <FoodBox key={food.name} food={food} callBackToDelete={deleteFood} />
        ))
        ) : (
          <p>Oops! There is no more Content to show!</p>
        )}
      </Row>
      
    </div>
  );
}

export default App;
