import React, {Component} from 'react'
import foods from '../../foods.json'
import FoodBox from './FoodBox'
import NewFoodForm from '../form/NewFoodForm'
import SearchBar from '../navbar/SearchBar'

class FoodList extends Component {

    constructor() {
        super()
        this.state = {
            foods: foods,
            name: '',
            calories: null,
            quantity: null
        }
    }

    addFood = newFood => {

        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)
        
        this.setState ({ foods: foodsCopy })
    }

    searchFood = food => {

        let searchedFood = foods.filter(elm => elm.name.toLowerCase().includes(food.text.toLowerCase()))
        
        this.setState ({ foods: searchedFood })
    }

    updateTodaysFood = foodId => {

        let todayFood = this.state.foods.filter((elm, index) => index === foodId)

        this.setState( { name: todayFood[0].name, calories: todayFood[0].calories, quantity: todayFood[0].quantity})
    }
    render() {
    
        return (
            <>   
                <SearchBar searchFood={this.searchFood} />
                <div class="columns">
                    <div class="column">
                    { this.state.foods.map((elm, index) => <FoodBox key={index} {...elm} updateTodaysFood={() => this.updateTodaysFood(index)} />)}
                    </div>
                    <div class="column">
                        <h3>Today's Food</h3>
                        <p>{this.state.name} = {this.state.calories} cal</p>
                        <p>Total: {this.state.calories}</p>
                    </div>
                    
                </div>
                <NewFoodForm addFood={this.addFood} />
            
            </>
        )
    }





}





export default FoodList