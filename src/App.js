import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [formOpened, setFormOpened] = useState(true)
  const foodListCopy = [...foodList];

  const addFood = (newFood) => {
    setFoodList((prevFoodList) => {
      const newList = [newFood, ...prevFoodList];
      return newList;
    });
  };

  const searchFilter = (searchFood) => {
    const newList = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchFood.toLowerCase());
    });
    setFoodList(newList);
  };

  const deleteFood = (foodName) => {
    const newList = foodList.filter( foodDetails => foodDetails.name !== foodName );
    setFoodList(newList);
  }

  const changeFormOpen = ()=>{
    if (formOpened === true){
      setFormOpened(false)
    } else {
      setFormOpened(true)
    }
    console.log(formOpened)
  }

  return (
    <div className="App">
      <div>
      <div className='formContainer'>

      {formOpened === true ? <AddFoodForm callbackToAdd={addFood} /> : <></> }

      <Button className='hide' type="primary" onClick={changeFormOpen}> Hide </Button>
      <Search searchFilter={searchFilter} />
      </div>
      </div>
      <div>
      {foodListCopy.map((foodListObj) => {
        return (
          <>
            <FoodBox foodDetails={foodListObj} callbackToDelete={deleteFood} />
          </>
        );
      })}
      </div>
    </div>
  );
}

export default App;
