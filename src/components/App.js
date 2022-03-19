import { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import foodsJson from '../foods.json';
import FoodBox from './FoodBox';
import Search from './Search';

function App() {
  const [foods, setFoods] = useState([...foodsJson]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    filterFoods(searchTerm);
  }, [searchTerm]);

  function filterFoods(term) {
    const clone = [...foods];
    const filtered = clone.filter((currentFoodObj) => {
      return currentFoodObj.name.toLowerCase().includes(term.toLowerCase());
    });
    setFoods(filtered);

    if (!term) {
      setFoods([...foodsJson]);
    }
  }

  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <Search
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div className="columns">
        <div className="column">
          {foods.map((currentFoodObj) => (
            <FoodBox key={currentFoodObj.name} food={currentFoodObj} />
          ))}
        </div>
        <div className="column content">
          <h2 class="subtitle">Today's foods</h2>
          <ul>
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: 700 cal</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
