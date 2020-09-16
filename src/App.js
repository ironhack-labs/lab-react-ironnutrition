import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox';

function App() {

  const [myFoods, setMyFoods] = useState(foods)
  const [displayForm, setDisplayForm] = useState(false)
  const [name, setName] = useState("")
  const [calories, setCalories] = useState(0)
  const [image, setImage] = useState("")
  const [search, setSearch] = useState("")
  const [myMeal, setMyMeal] = useState([])
  const [totalCalories, setTotalCalories] = useState(0)

  useEffect(() => {
    setMyFoods(myFoods.filter((food, index) => (new RegExp(search, 'i')).test(food.name)))
  }, [search])
  // Intenté con directo foods.filter para que los elementos vuelvan a aparecer cuando eliminamos el texto del input pero en este caso si añadimos elementos antes, ya los borra entonces peferí dejar con myFoods.filter aunque no podemos regresar al estado de antes de filtrar.

  const onClick = (e) => {
    e.preventDefault()
    setMyFoods([...myFoods, {
      name,
      calories,
      image
    }])
    setDisplayForm(!displayForm)
  }

  const addOne = (index, quantity) => {
    setMyFoods(myFoods.map((food, i) => i === index ? { ...food, quantity } : food))
  }

  const addToCart = (index) => {
    if (myFoods[index].quantity > 0) {
      let existingIndex = null;
      myMeal.forEach((food, i) => {
        if (food.name === myFoods[index].name) existingIndex = i
      })
      if (existingIndex != null && existingIndex >= 0) {
        const newMeal = JSON.parse(JSON.stringify(myMeal))
        newMeal[existingIndex].quantity = parseInt(myMeal[existingIndex].quantity) + parseInt(myFoods[index].quantity)
        setMyMeal(newMeal)
      }
      else {
        setMyMeal([...myMeal, myFoods[index]])
      }
      setTotalCalories(prev => prev + myFoods[index].calories * myFoods[index].quantity)
    }
  }

  const removeFromCart = (index) => {
    setTotalCalories(prev => prev - myMeal[index].quantity * myMeal[index].calories)
    setMyMeal([...myMeal].filter((food, i) => i != index))
  }


  return (
    <div className="App">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
      <h1 className="title is-1">IronNutrition</h1>
      <div className="menu-list">
        <div className="menu-options">
          {!displayForm &&
            <button className="button my-btn is-info" onClick={() => setDisplayForm(!displayForm)}>Add new food</button>}

          {displayForm &&
            <button className="button my-btn is-info" onClick={() => setDisplayForm(!displayForm)}>Hide form</button>}

          {displayForm && <form>
            <div className="field">
              <label className="label" htmlFor="name">Food name:</label>
              <div className="control">
                <input placeholder="Type food name" className="input my-input" type="text" name="name" id="name-input" value={name} onChange={e => setName(e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="calories">Number of calories:</label>
              <div className="control">
                <input placeholder="ex: 250" className="input my-input" type="number" name="calories" id="calories-input" value={calories} onChange={e => setCalories(e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="image">Image URL</label>
              <div className="control">
                <input placeholder="Paste the URL" className="input my-input" type="text" name="image" id="image-input" value={image} onChange={e => setImage(e.target.value)} />
              </div>
            </div>
            <button onClick={onClick} className="button my-btn is-success" style={{ margin: "20px 0" }}>Add new food</button>
          </form>}
          <br />
          <div className="field">
            <label className="label" htmlFor="search-input">Search food:</label>
            <input placeholder="Search food" className="input my-input" type="text" name="search" id="search-input" value={search} onChange={e => setSearch(e.target.value)} />
          </div>

          {myFoods.map((food, index) => <FoodBox key={index} food={food} quantity={food.quantity} onClick={() => addToCart(index)} onChange={(e) => addOne(index, e.target.value)} />)}
        </div>
        <div className="my-cart">
          <h2 className="title is-5">Today's foods:</h2>
          <ul>
            {myMeal.map((meal, index) => {
              return (
                <li key={index} style={{ display: "flex", alignItems: "center", margin: "10px 0", justifyContent: "space-between" }}>{meal.quantity} {meal.name} = {meal.quantity * meal.calories} cal &nbsp;&nbsp;&nbsp;<button className="button is-danger" onClick={() => removeFromCart(index)}><i class="far fa-trash-alt"></i></button></li>
              )
            })}
          </ul>
          <br />
          <b>Total: {totalCalories} cal</b>
        </div>
      </div>
    </div>
  );
}

export default App;
