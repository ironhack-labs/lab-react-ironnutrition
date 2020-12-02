import  React, {Component} from 'react';
import './FoodBox.css'
import foods from '../../foods.json';
import FoodCard from '../FoodCard/FoodCard';
import FoodForm from '../FoodForm/FoodForm';


class FoodBox extends Component {
    
    
    constructor() {
        super()
        this.state = {

            food: foods

    
        }
    }
    addFood = newFood => {

        const foodCopy = [...this.state.food]       
        foodCopy.push(newFood)

        this.setState({ food: foodCopy })
    }
        render (){


            return (
<div>
<h2>Añadir nueva comida</h2>
                <FoodForm addFood={this.addFood} />

            
            {this.state.food.map(elm => <FoodCard  {...elm} name = {elm.name} calories = {elm.calories} quantity = {elm.quantity} image = {elm.image}  />)}

                </div>
            )
        }
      }



      export default FoodBox;