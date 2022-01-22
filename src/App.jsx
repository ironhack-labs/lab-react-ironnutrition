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

  const handleNewFood = (newFood) => {
    setShow(!show);
    setFoods([...foods, newFood]);
  };

  const handleSearchChange = ({ target }) => setSeardchTerm(target.value);

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
          {foods.filter(bySearchTerm).map((entry) => (
            // ...entry = entry.name entry.image entry.calories
            <FoodBox key={entry.name} {...entry} />
          ))}
        </div>

        <div className="ctn-total container">
          <div>
            <h3>Total Food</h3>
          </div>
          <div>
            <div>
              <p>Name</p>
              <img src="" alt="" />
              <p>Calories: </p>
            </div>
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
