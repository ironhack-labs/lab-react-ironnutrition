import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';
import FoodForm from './components/foodform/FoodForm';
import Modal from './components/modal/Modal';

function App() {
  const initialState = {
    foods: [...foods],
  };

  const [state, setState] = useState(initialState);

  const handleAdd = (food) => {
    const newFoods = [...state.foods];
    newFoods.push(food);
    setState({ foods: newFoods });
    handleModalClose(new Event('click'));
  };

  const foodsList = state.foods.map((food) => {
    return <FoodBox key={food.name} food={food} />;
  });
  const handleModalOpen = (event) => {
    event.preventDefault();
    document.querySelector('.modal').classList.add('is-active');
  };
  const handleModalClose = (event) => {
    event.preventDefault();
    document.querySelector('.modal').classList.remove('is-active');
  };
  // const selectedFoodsList = foods.map((food) => {
  //   return <FoodBox key={food.name} food={food} />;
  // });
  return (
    <div className="container">
      <div className="column is-half">
        <button className="button is-success" onClick={handleModalOpen}>
          Add Food
        </button>
        {foodsList}
      </div>
      <Modal
        component={<FoodForm addFood={handleAdd}></FoodForm>}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default App;
