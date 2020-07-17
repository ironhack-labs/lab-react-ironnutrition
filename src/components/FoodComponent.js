import React, { useState } from 'react';
import foods from '../foods.json';
import Product from './Product';
import Form from './Form';
import TodaysFood from './TodaysFood';

const FoodComponent = () => {

    const copyFood = [...JSON.parse(JSON.stringify(foods))]

    const initialState = {
        products: [...copyFood],
        todaysFood: [],
        displayForm: false,
        filteringString: ""
    }

    const [state, setState] = useState(initialState)

    const handleFormToggle = () => {
        setState(state => ({
            ...state,
            displayForm: !state.displayForm
        }))
    }

    const handleSave = newProduct => {
        setState(state => ({
            ...state,
            products: [...state.products, newProduct],
            displayForm: false
        }))
    }

    const handleAddTodaysFood = newProduct => {
        setState(state => ({
            ...state,
            todaysFood: [...state.todaysFood, newProduct]
        }))
    }

    const handleSearch = ({target}) => {
        const { value } = target
        setState(state => ({
            ...state,
            filteringString: value
        }))
    }

    const filteredArray = state.products.filter(prod => {
        return prod.name.toLowerCase().indexOf(state.filteringString.toLowerCase()) !== -1
    })

    const listProducts = [...filteredArray].map(prod => {
        return (
            <Product key={prod.name} name={prod.name} image={prod.image} calories={prod.calories} addToTodaysFood={handleAddTodaysFood} />
        )
    })

    // const listTodaysFood = [...state.todaysFood].map
    
  return (
      <div>
          <input type="text" onChange={handleSearch} placeholder="Search.." /><br />
          <button onClick={handleFormToggle}>{ state.displayForm ? "Close" : "Add a new product" }</button>
          { state.displayForm && <Form addProduct={handleSave} /> }
          <div className="main">
            <div className="box">
                {listProducts}
            </div>
            <div className="todayFood">
                <TodaysFood />
            </div>
          </div>
          
      </div>
  );
}

export default FoodComponent;