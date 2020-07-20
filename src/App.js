import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import Foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';
import FoodForm from './components/foodform/FoodForm';
import Modal from './components/modal/Modal';
import SearchBox from './components/searchbox/SearchBox';
import TodayFoods from './components/todayfoods/TodayFoods';

function App() {
  const initialState = {
    foods: [...Foods],
    selectedFoods: [],
  };

  const [state, setState] = useState(initialState);
  const [search, setSearch] = useState('');

  const handleAdd = (_food) => {
    const newFoods = [...state.foods];
    newFoods.unshift(_food);
    setState({ ...state, foods: newFoods });
    handleModalClose(new Event('click'));
  };

  const handleModalOpen = (event) => {
    event.preventDefault();
    document.querySelector('.modal').classList.add('is-active');
  };
  const handleModalClose = (event) => {
    event.preventDefault();
    document.querySelector('.modal').classList.remove('is-active');
  };
  const handleSearch = (text) => {
    setSearch(text.toLocaleLowerCase());
  };
  const handleAddTodaysFood = (_food) => {
    const newSelFoods = state.selectedFoods;
    const selFoodInd = newSelFoods.findIndex((f) => f.name === _food.name);
    if (selFoodInd >= 0) {
      newSelFoods[selFoodInd].quantity =
        parseInt(newSelFoods[selFoodInd].quantity) + parseInt(_food.quantity);
    } else {
      newSelFoods.push(_food);
    }

    setState({ ...state, selectedFoods: newSelFoods });
  };
  const handleRemoveTodaysFood = (_food) => {
    const newSelFoods = state.selectedFoods;
    const selFoodInd = newSelFoods.findIndex((f) => f.name === _food.name);
    if (selFoodInd >= 0) {
      newSelFoods.splice(selFoodInd, 1);
    }

    setState({ ...state, selectedFoods: newSelFoods });
  };
  const foodsList = state.foods
    .filter((f) => f.name.toLocaleLowerCase().includes(search))
    .map((food) => {
      return (
        <FoodBox
          key={food.name}
          food={food}
          addTodaysFood={handleAddTodaysFood}
        />
      );
    });
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-one-fifth">
          <button
            className="button is-success is-large mt-4"
            onClick={handleModalOpen}
          >
            Add Food
          </button>
        </div>
        <div className="column">
          <SearchBox onChange={handleSearch} />
        </div>
      </div>
      <hr />
      <div className="columns">
        <div className="column is-half">{foodsList}</div>
        <div className="column is-half">
          <TodayFoods
            today={state.selectedFoods}
            onDelete={handleRemoveTodaysFood}
          />
        </div>
      </div>
      <Modal
        component={<FoodForm addFood={handleAdd}></FoodForm>}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default App;
