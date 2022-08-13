// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import Search from './components/Search';
import { useState } from 'react';

import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foodsArr from './foods.json';

let letter = 0;

foodsArr.map((food) => {
  food._id = Math.random() * (100 - 1) + 1;
});

function App() {
  const [foods, setFoodsArr] = useState(foodsArr);
  const [foodsData, setFoodsData] = useState(foodsArr);

  // Adicionar nova comida
  const addNewFood = (newFood) => {
    const updatedFoods = [newFood, ...foods];
    const updatedFoodsData = [newFood, ...foods];

    setFoodsData(updatedFoodsData);
    setFoodsArr(updatedFoods);
  };
  // Filtrar
  // Funciona, mas se outra coisa tiver a mesma letra na mesma posição, ele mostra também.
  // A solução seria se ele verificasse a letra anterior tb

  const filterFoods = (str) => {
    let filteredFoods;

    console.log('IIIIIIIII', letter);
    if (!str) {
      filteredFoods = foodsData;
      letter = 0;
      console.log('All');
    } else {
      filteredFoods = foodsData.filter((eachFood) => {
        return (
          eachFood.name[letter].toLocaleLowerCase() ===
          str[letter].toLocaleLowerCase()
        );
      });
      console.log('filteredFoods: ', filteredFoods);
      {
        console.log('string: ', str);
      }
      letter += 1;
    }

    setFoodsArr(filteredFoods);
  };

  // deletar

  const deleteFood = (name) => {
    foodsData.map((eachFood, index) => {
      if (eachFood.name === name) {
        foodsData.splice(index, 1);
        console.log(foodsData);
        setFoodsData(foodsData);
      }
    });
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />

      <hr />
      <hr />
      <Search filterFoods={filterFoods} />

      {foods.map((eachFood) => {
        return (
          <FoodBox key={eachFood._id} food={eachFood} deleteFood={deleteFood} />
        );
      })}
    </div>
  );
}

export default App;
