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
        const copyState = [...state.todaysFood]
        const index = state.todaysFood.findIndex(product => {
            return product.name === newProduct.name
        }) 
        if (index === -1) {
            setState(state => ({
                ...state,
                todaysFood: [...state.todaysFood, newProduct]
            }))
        } else {
            copyState[index].calories = copyState[index].calories + newProduct.calories
            copyState[index].quantity = copyState[index].quantity + 1
            setState(state => ({
                ...state,
                todaysFood: copyState
            }))
        }
        
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
    
  return (
      <div>
          <input className="input" type="text" onChange={handleSearch} placeholder="Search.." /><br />
          <button className="button" onClick={handleFormToggle}>{ state.displayForm ? "Close" : "Add a new product" }</button>
          { state.displayForm && <Form addProduct={handleSave} /> }
          <div className="main">
            <div className="box">
                {listProducts}
            </div>
            <div className="todaysFood">
                <TodaysFood ingredients={state.todaysFood}/>
            </div>
          </div>
          
      </div>
  );
}

export default FoodComponent;