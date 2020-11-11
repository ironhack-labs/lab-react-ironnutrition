import React, { Component } from 'react'
import foods from '../foods.json';
import AddFood from './AddFood';
import FoodBox from './FoodBox';
import Search from './Search';
import TodaysFood from './TodaysFood';

export class FoodList extends Component {
    state = {
        foods: foods,
        showForm: false,
        onMenu: []
    }

    showForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })

    }
    addFoodHandler = (NewFood) => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(NewFood)
        this.setState(
            {
                foods: foodsCopy,
                showForm: false
            }
        )
    }
    showResultHandler = (value) => {
        this.setState({
            foods: foods
        })
        console.log(value)
        const foodsCopy = [...this.state.foods]
        const filteredList = foodsCopy.filter(food => {
            console.log(food.name)
            return food.name.includes(value)
        })
        console.log(filteredList)
        this.setState({
            foods: filteredList
        })

      


    }

    addToMealHandler = (food) => {
        console.log(food.name)
        let foodsCopy = [...this.state.foods]
        let indexProduct = foodsCopy.map(oneAliment => oneAliment.name).indexOf(food.name)
        
        foodsCopy[indexProduct].quantity  = foodsCopy[indexProduct].quantity+1
        let quantityUpdated =  foodsCopy[indexProduct].quantity

        //THis update the quantity only once ... 
        food.quantityUpdated = quantityUpdated
        console.log(foodsCopy[indexProduct].quantity)
        
        this.setState({
            foods: foodsCopy
        })

        let onMenuCopy = [...this.state.onMenu]

        console.log(onMenuCopy)
        
        

        let inList = false
        onMenuCopy.forEach((aliment) => {

            console.log(aliment.name)
            if(aliment.name === food.name) {
                inList = true
            }
            else {
                inList = false
            }
        }
        )

        if(!inList) {
            onMenuCopy.push(food)

        }

        
       
    
        this.setState({
            onMenu: onMenuCopy,
        })
    }

    render() {
        return (
            <div className = "section">
                <div className= "food-list">
                <Search showResult = {this.showResultHandler} />
                <div>

                {
                    this.state.foods.map((aliment, index) => {
                        return (
                            
                            <FoodBox {...aliment} key= {index}  addToMeal={this.addToMealHandler}/>   
                     ) })
                    }
                </div>


                    {this.state.showForm ?  <AddFood addFood= {this.addFoodHandler} /> :  <button onClick={() => this.showForm()}>Show Add Food Form</button>}
                </div>

                 <TodaysFood onMenu= {this.state.onMenu}/>
            </div>
        )
    }
}

export default FoodList
