import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './Components/FoodBox';
import food from './foods.json';
import FoodForm from './Components/FoodForm';

function App() {
  const [show, setShow] = React.useState(false);
  const [foods, setFoods] = React.useState(food);
  const [searchTerm, setSeardchTerm] = React.useState('');
  const [selectedFoods, setSelectedFoods] = React.useState(new Map());

  const handleNewFood = (newFood) => {
    setShow(!show);
    setFoods([...foods, newFood]);
  };

  function mergeFoods(a, b) {
    const quantity = Number(a.quantity) + Number(b.quantity);
    return {
      name: a.name,
      quantity,
      calories: a.calories,
      image: a.image,
    };
  }

  const handleSelectFood = (selectedFood) => {
    // check if we already have this food in the selected foods
    const food = selectedFoods.get(selectedFood.name);
    if (food) {
      // copy previous state
      const newState = new Map([...selectedFoods]);
      // add sum of current selected food and new selected food
      newState.set(selectedFood.name, mergeFoods(food, selectedFood));
      // update the state
      console.log(newState);
      return setSelectedFoods(newState);
    }
    // copy previous state
    const newState = new Map([...selectedFoods]);
    // add the new food to the selected foods
    newState.set(selectedFood.name, selectedFood);
    setSelectedFoods(newState);
  };

  const handleSearchChange = ({ target }) => setSeardchTerm(target.value);

 

  const handleRemoveSelectedFood = (foodName) => {
    const newState = new Map([...selectedFoods]);
    newState.delete(foodName);
    setSelectedFoods(newState);
  };

  const bySearchTerm = (food) =>
    food.name.toLowerCase().includes(searchTerm) ||
    food.name.includes(searchTerm);

  return (
    <div className="App">
      <div className="field search-bar">
        <label className="label">Search Food in List</label>
        <div className="control has-icons-left">
          <input
            className="input is-primary"
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
            value={searchTerm}
          />
          <i
            className="icon is-left fas fa-search "
            style={{ color: 'tomato' }}
          ></i>
        </div>
      </div>
      {!show && (
        <button
          onClick={() => setShow(!show)}
          className="button is-success btn-add"
        >
          Add Food
        </button>
      )}

      {show && <FoodForm onClick={handleNewFood} />}
      <div className="section">
        <div className="food-list">
          {foods.filter(bySearchTerm).map((entry) => {
            // ...entry = entry.name entry.image entry.calories
            return (
              <FoodBox key={entry.name} {...entry} onClick={handleSelectFood} />
            );
          })}
        </div>
        <div className="ctn-total container">
          <div>
            <h3>Total Food</h3>
          </div>
          {[...selectedFoods].map(([_, food]) => {
            return (
              <div className='selected-food-list'>
                <div>
                  <div>
                    <p className='food-name'>{food.name}</p>
                    <img src={food.image} alt={food.name} style={{height: '40px'}}/>
                    <p>Cal: {Number(food.calories) * Number(food.quantity)}</p>
                    <p>Qty: {food.quantity}</p>
                    <button className='button is-danger is-small' onClick={() => handleRemoveSelectedFood(food.name)}>delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
