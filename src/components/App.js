import React, { useState } from 'react';
import foodsArr from '../foods.json';
import SearchBar from './SearchBar/SearchBar';
import FoodBox from './FoodBox/FoodBox';
import FoodList from './FoodList/FoodList';

import './App.css';
import 'bulma/css/bulma.css';

function App() {
  foodsArr.map((el) => (el.quantity = 1));

  const [state, setState] = useState({
    searchBox: '',
    foods: [...foodsArr],
    menu: [],
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
    const tempMenu = JSON.parse(JSON.stringify(state.menu));
    const itemID = event.currentTarget.id;
    tempMenu.splice(itemID, 1);
    setState({ ...state, menu: [...tempMenu] });
  };

  return (
    <div className="container">
      <h1 className="title">Iron Nutrition</h1>
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
      </div>
    </div>
  );
}

export default App;
