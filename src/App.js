import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';
import DailyCalories from './components/DailyCalories';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foodList);
  const [showForm, setShowForm] = useState(false);
  const [calories, setCalories] = useState({});
  const [totalCalories, setTotalCalories] = useState(0);

  const calculateCalories = (data) => {
    setCalories({ ...calories, [data.name]: data });
  };

  const renderCalories = () => {
    const calculations = Object.keys(calories).reduce((acc, curr) => {
      const cals = calories[curr].quantity * calories[curr].calories;
      acc += cals;
      return acc;
    }, 0);

    return calculations;
  };

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

    setFilteredFoodList(filteredList);
  };

  return (
    <div className="App" style={{ width: '80vw', margin: '0 auto' }}>
      {/* show form here */}
      <SearchBar searchForFood={searchForFood} />
      <div className="control">
        <button
          className="button is-info my-3"
          onClick={() => setShowForm(!showForm)}
        >
          Show Form
        </button>
      </div>

      {showForm && <AddFoodForm addFoodToList={addFoodToList} />}

      <div>
        <div className="my-5">Total {renderCalories()} Calories</div>
        <div>
          <DailyCalories calories={calories} />
        </div>
        <div>
          {filteredFoodList &&
            filteredFoodList.map((food, i) => {
              return (
                <div key={i}>
                  <FoodBox food={food} calculateCalories={calculateCalories} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
