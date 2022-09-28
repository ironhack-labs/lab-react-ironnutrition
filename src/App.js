import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';

import { useState } from 'react';

function App() {
  const [myFood, setMyFood] = useState(foods);
  //states for searching
  const [foundFood, setFoundFood] = useState(foods);
  //state for hiding form
  const [formVisible, setFormVisible] = useState(false);

  const addNewFood = (newFood) => {
    const updatedFood = [...myFood, newFood];
    //add food to the main state
    setMyFood(updatedFood);
    //add food to the search state
    setFoundFood(updatedFood);
  };

  const deleteFood = (foodName) => {
    const filteredFood = myFood.filter((e) => {
      return e.name !== foodName;
    });
    setMyFood(filteredFood);
    setFoundFood(filteredFood);
  };

  const searchFood = (query) => {
    console.log(query);
    const arrayOfMatchedFood = myFood.filter((element) => {
      return element.name.toLowerCase().includes(query.toLowerCase());
    });
    setFoundFood(arrayOfMatchedFood);
  };

  return (
    <div className="App">
      {formVisible && <AddFood addNewFood={addNewFood} />}
      <button
        className="form-visibility-button"
        onClick={() => setFormVisible(!formVisible)}
      >
        {formVisible ? 'Hide Form' : 'Add New Food'}
      </button>
      <Search searchFood={searchFood} />
      <h3>Food List</h3>
      <div className="food-list-container">
        {foundFood.length == 0 ? (
          <h4>Ooops! There is no content to show.</h4>
        ) : (
          foundFood.map((element) => (
            <FoodBox food={element} deleteFood={deleteFood} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
