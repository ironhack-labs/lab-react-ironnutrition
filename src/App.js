import React, { useState } from 'react';

import './App.css';
import { Foodbox } from './components/Foodbox';
import foods from './foods.json';
import 'bulma/css/bulma.css';

function App() {
  // const [name, setNome] = useState('');
  // const [calories, setCalories] = useState(0);
  // const [image, setPhoto] = useState('');

  const openModal = () => {
    var element = document.getElementsByClassName('modal');
    element[0].classList.add('is-active');
  };

  const closeModal = () => {
    var element = document.getElementsByClassName('modal is-active');
    element[0].classList.remove('is-active');
  };

  const addNewFood = () => {
    var element = document.getElementsByClassName('modal is-active');
    element[0].classList.remove('is-active');
  };
  return (
    <div className="App">
      <button className="button is-primary" onClick={() => openModal()}>
        ADD FOOD
      </button>
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <input class="input" dad type="text" placeholder="Comida" />
          <input class="input" type="number" placeholder="Calorias" />
          <input class="input" type="text" placeholder="Foto em URL" />
          <button className="button is-primary" onClick={() => addNewFood()}>
            ADD FOOD
          </button>
        </div>
        <button
          onClick={() => closeModal()}
          className="modal-close is-large"
          aria-label="close"
        ></button>
      </div>
      <Foodbox foods={foods} />
    </div>
  );
}

export default App;
