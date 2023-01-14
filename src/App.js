import './App.css';
import { useState } from "react";
import foodsDataJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import { Row, Divider, Button } from 'antd';


function App() {
  const [foods, setFoods] = useState(foodsDataJSON);
  const [foodsData, setFoodsData] = useState(foodsDataJSON);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    const updatedFoodsData = [...foodsData, newFood];
 
    setFoods(updatedFoods);
    setFoodsData(updatedFoodsData);
  };

  const searchFoodList = (foodName) => {
    let searchedFoods;
    
    if (foodName === "") {
      searchedFoods = foodsData;
    } else {
      searchedFoods = foodsData.filter((food) => {
        return food.name.toLowerCase().includes(foodName.toLowerCase()) === foodName.toLowerCase();
      });
    }
   
    setFoods(searchedFoods);
  };

  return (
    <div className="App">
       <AddFood addFood={addNewFood}/>
       <Button> Hide Form / Add New Food </Button>

       <Search searchFoods={searchFoodList}/>

       <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
       { foods.map(food => {
        return (
          <FoodBox key={Math.floor(Math.random() * 1000)} food ={food}/>
        )
      }
      )}
      </Row>
    </div>
  );
}

export default App;
