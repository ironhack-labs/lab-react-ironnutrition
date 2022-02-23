import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodArr from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

function App() {

  const [food, setFood] = useState(foodArr);
  // const [isActive, setActive] = useState(false);

  const addNewFood = (newFood) => {
    setFood([newFood, ...food]);
  };


  return (
    <div className="App">
      <header className="App-header"></header>
      <h1 className='is-size-2 has-text-weight-semibold'>Iron Nutrition</h1>
      {/* <button onClick={ () => setActive(isActive)}>{isActive ? 'Close' : 'Add New Food'}</button> */}
      {/* {isActive &&  */}
      <AddFood addNewFood={addNewFood} />
      {/* } */}

      <section>
        {foodArr.map(element => {
          return (
            <FoodBox
              key={element.id}
              name={element.name}
              calories={element.calories}
              image={element.image}
              quantity={element.quantity} />
          )
        })}
      </section>
    </div>
  );
}

export default App;
