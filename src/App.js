import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './foodbox/FoodBox';
import NewFood from './newfood/NewFood';
import './App.css';
import { arrayTotal } from './foodbox/FoodBox';

function App() {
  const [input, setInput] = useState({
    name: '',
    calories: '',
    image: '',
    quantity: '',
  });
  const [food, setFood] = useState(foods);
  function handleChange(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChangeDev = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = food.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    console.log(searchResults);
  }, [searchTerm]);

  return (
    <div className="geral">
      <div className="form">
        <input
          className="input"
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Name"
        ></input>
        <input
          className="input"
          type="number"
          name="calories"
          onChange={handleChange}
          placeholder="Calories"
        ></input>
        <input
          className="input"
          type="text"
          name="image"
          onChange={handleChange}
          placeholder="Image"
        ></input>
      </div>
      <button
        className="button is-link"
        onClick={() => setFood([...food, input])}
      >
        Add a New Food
      </button>
      <div className="search-bar">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChangeDev}
        ></input>
      </div>

      {searchResults.map((item) => (
        <FoodBox
          name={item.name}
          calories={item.calories}
          img={item.image}
          qtd={item.quantity}
        />
      ))}
      {/* {food.map((elem) => (
        <FoodBox
          name={elem.name}
          calories={elem.calories}
          img={elem.image}
          qtd={elem.quantity}
        />
      ))} */}
    </div>
  );
}
export default App;
