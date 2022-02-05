import React, { useEffect, useState } from 'react';

import './App.css';
import { FoodBox, Modal } from './components';
import foodsArray from './foods.json';
function App() {
  const [foods, setFoods] = useState(foodsArray);
  //para hacer el fix del issue
  const [filterFood, setFilterFood] = useState(foods);
  const [selectFood, setSelectFood] = useState([]); //un nuevoState para almacenar todos las comidas que agregamos al carrito

  const onSearch = (e) => {
    const newResults = foods.filter((food) =>
      food.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterFood(newResults);
  };
  const addSelectFood = (isCalories) => {
    const newSelect = selectFood.reduce((acc, curr) => {
      if (acc.find((element) => element.name === curr.name)) {
        return acc.map((element) => {
          if (element.name === curr.name) {
            let quantity = Number(element.quantity) + Number(curr.quantity);
            let calories = Number(curr.calories) * quantity;
            return {
              ...element,
              quantity,
              calories,
            };
          }
          return element;
        });
      }
      return [...acc, { ...curr, calories: curr.quantity * curr.calories }];
    }, []);
    //opcion 1) reutilizando la misma funcion
    if (isCalories) {
      return newSelect.reduce((acc, val) => acc + val.calories, 0);
    }

    return newSelect;
  };
  //opcion 2) otra funcion
  const sumCal = () => {
    return addSelectFood(selectFood).reduce(
      (acc, val) => acc + val.calories,
      0
    );
  };
  //advance ciclo de vida!!!!
  useEffect(() => {
    setFilterFood(foods);
  }, [foods]);

  //useEffect(()=>{},[])
  return (
    <div className="App">
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Search"
            name="search"
            onChange={onSearch}
          />
        </div>
      </div>
      <Modal addFood={(item) => setFoods([...foods, item])} />
      <div className="containerList">
        <div>
          {filterFood.map((food, index) => (
            <FoodBox
              key={index}
              {...food}
              selectFood={(item) => setSelectFood([...selectFood, item])}
            />
          ))}
        </div>

        <div>
          <h2>Today's foods</h2>
          <ul>
            {addSelectFood().map((item, index) => (
              <li key={index}>
                {`${item.name} = ${item.calories} cal.`}
              </li>
            ))}
          </ul>

          <p>
            <span>Total: {addSelectFood(true)} cal</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;