import React, { useState } from 'react';
import foodsArr from '../foods.json';
import SearchBar from './SearchBar/SearchBar';
import FoodBox from './FoodBox/FoodBox';
import FoodList from './FoodList/FoodList';
import AddFood from './AddFood/AddFood';

import './App.css';
import 'bulma/css/bulma.css';

function App() {
  foodsArr.map((el) => (el.quantity = 1));

  const [state, setState] = useState({
    searchBox: '',
    foods: [...foodsArr],
    menu: [],
    addFoodState: false,
  });

  const searchChange = (event) => {
    setState({ ...state, searchBox: event.currentTarget.value });
  };

  const changeQuantity = (event) => {
    const tempFoods = JSON.parse(JSON.stringify(state.foods));
    tempFoods[event.currentTarget.id].quantity = Number(
      event.currentTarget.value
    );
    setState({ ...state, foods: [...tempFoods] });
  };

  const addItem = (event) => {
    const tempMenu = JSON.parse(JSON.stringify(state.menu));
    const existsIdx = tempMenu
      .map((food) => food.name)
      .indexOf(state.foods[event.currentTarget.id].name);
    if (existsIdx === -1) {
      tempMenu.push(state.foods[event.currentTarget.id]);
    } else {
      tempMenu[existsIdx].quantity +=
        state.foods[event.currentTarget.id].quantity;
    }
    setState({ ...state, menu: [...tempMenu] });
  };

  const removeItem = (event) => {
    event.preventDefault();
    const tempMenu = JSON.parse(JSON.stringify(state.menu));
    const itemID = event.currentTarget.id;
    tempMenu.splice(itemID, 1);
    setState({ ...state, menu: [...tempMenu] });
  };

  const addFood = (event) => {
    event.preventDefault();
    const tempFoods = JSON.parse(JSON.stringify(state.foods));
    tempFoods.push({
      name: event.currentTarget.name.value,
      calories: event.currentTarget.calories.value,
      image: event.currentTarget.image.value,
      quantity: 1,
    });
    setState({ ...state, foods: [...tempFoods], addFoodState: false });
  };

  const addFoodButton = (event) => {
    setState({ ...state, addFoodState: true });
  };

  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <SearchBar searchBox={state.searchBox} searchChange={searchChange} />
      <div className="columns">
        <div className="column">
          {state.foods
            .filter((el) =>
              el.name.match(new RegExp('(' + state.searchBox + ')', 'gi'))
            )
            .map((el, i) => (
              <FoodBox
                key={i}
                index={i}
                elements={el}
                changeQuantity={changeQuantity}
                addItem={addItem}
              />
            ))}
        </div>
        <FoodList removeItem={removeItem} foodList={state.menu} />
        <AddFood
          addFoodButton={addFoodButton}
          addFood={addFood}
          addFoodState={state.addFoodState}
        />
      </div>
    </div>
  );
}

export default App;

// (new RegExp('(' + state.searchBox + ')', 'gi').test(el.name)

////const tempFoods = [...state.foods];
//   const tempFoods = JSON.parse(JSON.stringify(state.foods));
// //tempFoods[event.currentTarget.id].quantity = event.currentTarget.value;
//   setState((prevstate) => {
//      console.log(state);
//     prevstate.foods[event.currentTarget.id].quantity += Number(
//      event.currentTarget.value
//     );
// console.log(state);
//     return prevstate;
// });
