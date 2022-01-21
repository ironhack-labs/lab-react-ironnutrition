import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './Components/FoodBox';
import food from './foods.json';

function App() {
  const initialObject = {
    name: '',
    image: '',
    calories: '',
  };

  const [isActive, setActive] = React.useState(false);
  const [foodList, setFoodList] = React.useState(food);
  const [newItem, setNewItem] = React.useState(initialObject);

  //iterate through list of food
  const foodListToJSX = foodList.map((entry) => (
    <FoodBox name={entry.name} image={entry.image} calories={entry.calories} />
  ));

  const handleChange = ({ target }) => {
    const inputName = target.name;
    const inputValue = target.value;
    const newValues = { ...newItem, [inputName]: inputValue };
    setNewItem(newValues);
  };

  return (
    <div className="App">
      {!isActive && (
        <button
          onClick={() => setActive(true)}
          className="button is-success btn-add"
        >
          Add Food
        </button>
      )}

      {isActive && (
        <div
          className="field"
         
        >
          <form  onSubmit={(event) => {
            event.preventDefault();
            setFoodList([...foodList, newItem]);
            setNewItem(initialObject);
            setActive(false);
          }}>

          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChange}
          />

          <label className="label" htmlFor="image">
            Image URL
          </label>
          <input
            className="input"
            type="text"
            name="image"
            value={newItem.image}
            onChange={handleChange}
          />
          <label className="label" htmlFor="calories">
            Calories
          </label>
          <input
            className="input"
            type="number"
            name="calories"
            value={newItem.calories}
            onChange={handleChange}
          />
          <button className="button is-dark" type="submit">
            ADD
          </button>
          </form>

        </div>
      )}
      {foodListToJSX}
    </div>
  );
}

export default App;
