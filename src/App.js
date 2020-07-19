import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import Foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';
import FoodForm from './components/foodform/FoodForm';
import Modal from './components/modal/Modal';
import SearchBox from './components/searchbox/SearchBox';

function App() {
  const initialState = {
    foods: [...Foods],
    foodList: [...Foods],
    selectedFoods: [],
  };

  const [state, setState] = useState(initialState);

  const handleAdd = (_food) => {
    const newFoods = [...state.foods];
    newFoods.push(_food);
    setState({ ...state, foodList: newFoods, foods: newFoods });
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
    console.log(text);
    let searchResult = state.foods;
    if (text) {
      searchResult = state.foodList.filter((f) =>
        f.name.toLowerCase().includes(text.toLowerCase())
      );
    }
    setState({ ...state, foodList: searchResult });
  };
  const foodsList = state.foodList.map((food) => {
    return <FoodBox key={food.name} food={food} />;
  });
  const selectedFoodsList = state.selectedFoods.map((food) => {
    return <FoodBox key={food.name} food={food} />;
  });

  return (
    <div className="container">
      <SearchBox onChange={handleSearch} />
      <div className="column is-half">
        <button className="button is-success" onClick={handleModalOpen}>
          Add Food
        </button>
        <hr />
        {foodsList}
      </div>
      <div className="column is-half">{selectedFoodsList}</div>
      <Modal
        component={<FoodForm addFood={handleAdd}></FoodForm>}
        onClose={() => handleModalClose()}
      />
    </div>
  );
}

export default App;
