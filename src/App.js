// src/App.js
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [listOfFoods, setListOfFoods] = useState(foods);
  const [addFormCondition, setaddFormCondition] = useState(false);
  const [basedArray, setBasedArray] = useState(foods);

  //Add Food Function
  const addFood = (foodDetails) => {
    setListOfFoods((prevListOfFoods) => {
      const newList = [foodDetails, ...prevListOfFoods];
      return newList;
    });
  };

  //Search Food Function
  const searchFood = (searchItem) => {
    const newList = basedArray.filter((food) => {
      console.log(listOfFoods);
      if (searchItem === '') {
        return food;
      } else {
        return food.name.toLowerCase().includes(searchItem.toLowerCase());
      }
    });
    setListOfFoods(newList);
  };

  //Delete Foods
  const deleteFood = (foodName) => {
    const newList = listOfFoods.filter((food) => {
      return food.name !== foodName;
    });
    setListOfFoods(newList);
  };

  const formOpener = () => {
    if (addFormCondition === false) {
      setaddFormCondition(true);
    } else {
      setaddFormCondition(false);
    }
  };

  return (
    <div>
      <Search callbackToSearch={searchFood} />
      <Button onClick={formOpener}> Hide Form / Add New Food </Button>
      {addFormCondition && <AddFoodForm callbackToAdd={addFood} />}
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {listOfFoods.map((foodDetails) => {
          return (
            <FoodBox
              key={foodDetails.name}
              food={foodDetails}
              callbackToDelete={deleteFood}
            />
          );
        })}
      </Row>
    </div>
  );
}
export default App;
