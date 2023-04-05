import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import Foodbox from './component/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);
  const addFood = (newFood) => {
    console.log(newFood);

    setFoodsArr((prevFoodsArr) => {
      return [newFood, ...prevFoodsArr];
    });
  };

  const searchFilter = (searchDetail) => {
    const newList = foodsArr.filter((food) => {
      return food.name.includes(searchDetail);
    });

    setFoodsArr(newList);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />
      <Search searchFilter={searchFilter} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsArr.map((foodsDetails, index) => {
          return <Foodbox foodsDetails={foodsDetails} key={index} />;
        })}
      </Row>
    </div>
  );
}

export default App;
