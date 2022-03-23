import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import jsonFoods from './foods.json';
import FoodBox from "./components/FoodBox"

const App = () => {

  const [formOpened, setFormOpened] = useState(false)
  const [newFood, setNewFood] = useState()
  const [foods, setFoods] = useState(jsonFoods)
  const [searchText, setSearchText] = useState()
  const [addedFood, setAddedFood] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    toggleForm()
    setFoods([...foods, newFood])
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewFood({ ...newFood, [name]: value })
  }

  const toggleForm = () => {
    setFormOpened(!formOpened)
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }

  const filteredFoods = () => {
    return [...foods].filter(f => f.name.toLowerCase().includes(searchText))
  }

  const addFood = (food) => {
    setAddedFood([...addedFood, food])
  }

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <button className='m-5' onClick={toggleForm}>Add new foods</button>
      {formOpened &&
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <label className='mb-2'>
            Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <label className='mb-2'>
            Number:
            <input type="number" name="quantity" onChange={handleChange} />
          </label>
          <label className='mb-2'>
            Calories:
            <input type="text" name="calories" onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      }
      <h2><strong>Added Food:</strong></h2>
      {addedFood.map((f, i) =>
        <p className='m-2' key={i} >{f.name}{f.calories}{f.number}</p>
      )}
      <label className='mb-2'>
        Search:
        <input type="text" name="search" value={searchText} onChange={handleSearch} />
      </label>
      {searchText ? filteredFoods()?.map((f, i) =>
        <FoodBox key={i} food={f} addFood={addFood} />
      ) : foods.map((f, i) =>
        <FoodBox key={i} food={f} addFood={addFood} />
      )}

    </div>
  );
}

export default App;
