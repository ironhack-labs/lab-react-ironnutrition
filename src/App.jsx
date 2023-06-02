import './App.css';
import foodsJSON from "./foods.json";
import { useState } from 'react';

import MyFoodBox from "./components/MyFoodBox.jsx"
import AddFoodEntry from "./components/AddFoodEntry.jsx"
import Search from "./components/Search.jsx"


import { Row, Divider } from 'antd';

function App() {
  const [foods, setFood] = useState(foodsJSON)
  const [foodsOrginal, setFoodOriginal] = useState(foodsJSON)

  

  const addNewFood = newFood =>{
    const newFoodBox = <MyFoodBox
      name={newFood.name}
      image={newFood.image}
      calories={newFood.calories}
      servings={newFood.servings}
    />
    console.log(<MyFoodBox
      name={newFood.name}
      image={newFood.image}
      calories={newFood.calories}
      servings={newFood.servings}
    />)
    setFood(prevFood => [newFoodBox, ...prevFood])
    setFoodOriginal(prevFood => [newFoodBox, ...prevFood])
  }

  const deleteFood = (foodName) => {
    setFood((state) =>
      [...state].filter((food) => food.name !== foodName)
    );
    setFoodOriginal((state) =>
      [...state].filter((food) => food.name !== foodName)
    );
  };

  return (
    <div className="App">
      <Search allFoods={foodsOrginal} changeResult={setFood}/>


      <AddFoodEntry add={addNewFood}/>
      

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        
        {
        foods &&
        foods.map((food) => <MyFoodBox 
          deleteFood={deleteFood}
          name={food.name} 
          image={food.image}
          calories={food.calories}
          servings={food.servings}/>)}
        
      </Row>
    </div>
  );
}

export default App;
