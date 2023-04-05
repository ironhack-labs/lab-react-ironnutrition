import foodsArr from './foods.json';
import './App.css';

// useState IMPORT
import { useState } from 'react';

// ANTD IMPORTS
import { Row, Divider } from 'antd';

// COMPONENTS IMPORTS
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  // stateful var initialized to the original array of foods
  const [foods, setFoods] = useState(foodsArr);

  // function to handle submissions 
  const addFood = (newFood) => {
    setFoods((prevFoodsArr) => {
      const newFoodArr = [newFood, ...prevFoodsArr];
      return newFoodArr;
    })
  }

  const handleDelete = (foodObjDeleted) => {
    setFoods((prevFoodsArr) => 
      prevFoodsArr.filter((foodObj) => foodObj !== foodObjDeleted)
    );
  };

  return (
    <div className="App">

      <AddFoodForm addFood={addFood} />

      <Search foods={foods} setFoods={setFoods} />

      <Divider>{"Food List"}</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((foodObj) => {
          return (
            <FoodBox key={foodObj.name} foodObj={foodObj} handleDelete={handleDelete} />
          )
        })}
      </Row>

    </div>
  );
}

export default App;
