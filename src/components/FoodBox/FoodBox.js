import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Foods from './../../foods.json'
import Food from '../FoodBox/Food'
import FormFood from '../FoodBox/Food-form'

import './FoodBox.css'

class FoodBox extends Component {
    constructor() {
        super()
        this.state = {
            foods: Foods
        }
       
    }

    addFood = theFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(theFood)
        this.setState({ foods: foodsCopy })
    }


    render() {

        return (

            <>
            <h1>IronNutricion</h1>
                <button className="btn" onClick={this.addFood}>Agregar </button>


                {this.state.foods.map((elm, idx) => {
                    
                   return <Food 
                        key={idx} 
                        name={elm.name}     
                        calories={elm.calories}     
                        image={elm.image}   
                        quantity={elm.quantity}
                        />
                        })}

                        <FormFood/>
                
            </>


           
        )
    }
}

export default FoodBox