import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header';
import FoodBox from './components/FoodBox/FoodBox';
import foodsJson from './foods.json';
import CartList from './components/CartList/CartList';
import NewFood from './components/NewFood/NewFood';
import './App.css';
import 'bulma/css/bulma.css';

const App = () => { 
  const [ searchQuery, setSearchQuery ] = useState('')
  const [ foods, setFoods ] = useState([...foodsJson])
  const [ cart, setCart ] = useState([])
  const [ showForm, setForm ] = useState(false)

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    setFoods([...foodsJson].filter(f => f.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const handleCart = (name, calories, quantity) => {
    let actualCart = [...cart]

    if(actualCart.map(e => e.name).includes(name)) {
      actualCart[actualCart.findIndex(e => e.name === name)].quantity += Number(quantity)
    } else {
      actualCart.push({name, calories, quantity: Number(quantity)})
    }

    setCart( actualCart )
  }

  const handleDelete = (item) => {
    setCart(cart.filter(f => f.name !== item))
  }

  const showFormComponent = () => {
    setForm(true)
  }

  const onSubmit = (food) => {
    const old = foods
    setFoods([ { ...food, id: uuidv4(), quantity: 0 }, ...old ])
    setForm(false)
  }

  return (
      <div className="App">
        
        <Header 
          query={ searchQuery }
          onChange={ (e) => handleChange(e) }
        />
        <button className="button is-info ml-2" onClick={ showFormComponent }>
            +
          </button>
        {showForm && <NewFood onSubmit={ onSubmit } />}
        <div className="columns">
          <div className="column">
            
            { foods.map(food => {
              return (
                <FoodBox 
                  key={ food.name.split(' ').join('') }
                  name={ food.name }
                  calories={ food.calories }
                  image={ food.image }
                  onClick={ handleCart }
                />
              )
            }) }

          </div>
          <div className="column">

            <h3 className="title is-4"><b>Today´s Food</b></h3>

            <div className="block content">
              { cart.length > 0 && <CartList list={ cart } onDelete={ handleDelete } /> }
            </div>

            <p><b>Total: { cart.reduce((acc, cur) => { return acc + (cur.calories * cur.quantity) }, 0) } cal</b></p>
          </div>
        </div>
        
    </div>
    )
}

export default App