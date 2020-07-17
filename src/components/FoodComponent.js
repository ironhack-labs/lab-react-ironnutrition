import React, { useState } from 'react';
import foods from '../foods.json';
import Product from './Product';
import Form from './Form';

const FoodComponent = () => {

    const copyFood = [...JSON.parse(JSON.stringify(foods))]

    const initialState = {
        products: [...copyFood],
        displayForm: false
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
            products: [...state.products, newProduct]
        }))
    }

    const listProducts = [...state.products].map(prod => {
        return (
            <Product key={prod.name} name={prod.name} image={prod.image} calories={prod.calories} />
        )
    })
    
  return (
      <div>
          <button onClick={handleFormToggle}>{ state.displayForm ? "Close" : "Add a new product" }</button>
          { state.displayForm && <Form addProduct={handleSave} /> }
          <div className="box">
              {listProducts}
          </div>
      </div>
  );
}

export default FoodComponent;
