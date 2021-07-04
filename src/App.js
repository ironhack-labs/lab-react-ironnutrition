import React from 'react';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foodList, setFoodList] = useState(foods);

  //adding new food items related
  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    image: '',
    quantity: 1,
  });

  const [isVisible, setIsVisible] = useState(false);

  const formVisiblityToggle = () => {
    isVisible === false ? setIsVisible(true) : setIsVisible(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewFood({
      ...newFood,
      [name]: value,
    });
  };

  function addFood(event) {
    event.preventDefault();

    setFoodList([...foodList, newFood]);
    setNewFood({
      name: '',
      calories: '',
      image: '',
    });
    formVisiblityToggle();
  }

  //search field related
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  //creating daily intake list
  const [dailyList, setDailyList] = useState([]);

  const addToDailyList = (item, value) => {
    setDailyList((prev) => [
      ...prev,
      { name: item.name, calories: item.calories, quantity: value },
    ]);
  };

  const deleteDailyItem = (item) => {
    const updatedList = dailyList.filter((i) => i.name !== item);
    setDailyList((prev) => (prev = updatedList));
  };

  return (
    <>
      <h1 className="title is-1">IronNutrition</h1>

      <input
        type="text"
        className="input is-primary"
        name="search"
        onChange={handleSearch}
        placeholder="Search"
      />

      {!isVisible && (
        <button
          className="button is-primary is-light"
          type="button"
          onClick={formVisiblityToggle}
        >
          Add food
        </button>
      )}

      {isVisible && (
        <form onSubmit={addFood}>
          <h2>Add the details</h2>
          <label>
            Name:
            <input
              className="input is-primary is-rounded"
              name="name"
              value={newFood.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Calories:
            <input
              className="input is-primary is-rounded"
              name="calories"
              value={newFood.calories}
              onChange={handleChange}
            />
          </label>
          <label>
            Image:
            <input
              className="input is-primary is-rounded"
              name="image"
              value={newFood.image}
              onChange={handleChange}
            />
          </label>
          <button className="button is-primary" type="submit">
            Submit food
          </button>
        </form>
      )}

      <section>
        {foodList
          .filter((value) => {
            if (searchTerm === '') {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item, idx) => (
            <FoodBox key={idx} food={item} addToDailyList={addToDailyList} />
          ))}
      </section>
      <section>
        <h2>Daily Intake</h2>
        <ul>
          {dailyList.map((event) => {
            return (
              <div>
                <li>
                  {event.quantity} {event.name} : {event.calories} kcal
                </li>
                <button
                  className="button is-danger is-light"
                  onClick={() => deleteDailyItem(event.name)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default App;
