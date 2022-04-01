import React, { useState } from 'react'
import foodsJson from './foods.json'
import Form from './components/Form/Form'
import SearchBar from './components/SearchBar/SearchBar'
import FoodBox from './components/FoodBox/FoodBox'
import TodaysFood from './components/TodaysFood/TodaysFood'
import 'bulma/css/bulma.css'
import './App.css'

const App = () => {
  const [foods, setFoods] = useState(foodsJson)
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState("")
  const [menu, setMenu] = useState([])

  const deleteFood = (id) => setMenu(menu.filter(food => food.id !== id))

  const onSubmit = (food) => setFoods([food, ...foods])

  const addFood = (food) => {
    const foodIndex = menu.findIndex(el => el.id === food.id)

    if (foodIndex > -1) {
      let newMenu = [...menu]
      newMenu[foodIndex].quantity = newMenu[foodIndex].quantity + food.quantity
      setMenu(newMenu)
    } else  {
      setMenu([...menu, food])
    }
  }

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
      <div className="columns">
        <div className="column">
          {foods.map(food => {
            if (food.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div key={food.id}>
                  <FoodBox addFood={addFood} {...food} />
                </div>
              )
            }
            return null
          })}
        </div>
        <div className="column my-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className={`button ${!showForm ? 'is-primary' : 'is-danger'}`}
          >
            {!showForm ? "Create food" : "Close form"}
          </button>
          {showForm && <Form onSubmit={onSubmit} onClose={() => setShowForm(false)} />}
          <TodaysFood deleteFood={deleteFood} menu={menu}/>
        </div>
      </div>
    </div>
  );
}

export default App;
