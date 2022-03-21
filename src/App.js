import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  const addFoodToList = (formData) => {
    setFoodList([...foodList, formData]);
  };

  const searchForFood = (e) => {
    const { value } = e.target;

    let filteredList =
      value === ''
        ? foods
        : foodList.filter((el) =>
            el.name.toLowerCase().includes(value.toLowerCase())
          );

    setFoodList(filteredList);
  };

  return (
    <div className="App">
      {/* show form here */}
      <SearchBar searchForFood={searchForFood} />

      {showForm && <AddFoodForm addFoodToList={addFoodToList} />}

      <div className="control">
        <button
          className="button is-info m-3"
          onClick={() => setShowForm(!showForm)}
        >
          Show Form
        </button>
      </div>

      {foodList &&
        foodList.map((food, i) => {
          return (
            <div key={i}>
              <FoodBox food={food} />
            </div>
          );
        })}
    </div>
  );
}

export default App;
