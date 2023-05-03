import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import { Row, Divider, Button } from 'antd';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodsArr, newFood];
    setFoodsArr(updatedFoods);
  };

  /*   const search = (str) => {
    let filteredFoods;

    if (!str) {
      filteredFoods = foodsArr;
    } else {
      filteredFoods = foodsArr.filter((food) => {
        return food.name[0].toLowerCase() === str.toLowerCase();
      });
    }
    setFoodsArr(filteredFoods);
  }; */

  const search = (searchInput) => {
    const searchResult = foodsArr.filter((food) => {
      const nameFood = food.name.toLowerCase().split('').sort();
      const searchChars = searchInput.toLowerCase().split('').sort();
      return searchChars.every((char) => nameFood.includes(char));
    });

    setFoodsArr(searchResult);
  };

  return (
    <div className="App">
      <Divider>Food List</Divider>

      <AddFoodForm addFood={addNewFood} />

      <Search search={search} />

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsArr.map((food) => {
          return <FoodBox key={food.name} food={food} />;
        })}
      </Row>
    </div>
  );
}
export default App;
