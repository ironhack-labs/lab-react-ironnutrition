import React from 'react'
import 'bulma/css/bulma.css';
import './FoodList.css'
import FoodBox from './FoodBox'
import foods from '../foods.json'
import AddFood from './AddFood'
import SearchBar from './SearchBar'


class FoodList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodList : foods,
            foodsForToday : []
        }
    }

    removeFood(foodName) {
        
        let foodListClone = JSON.parse(JSON.stringify(this.state.foodsForToday)); //deep copy
        let i = foodListClone.map(e => e.name).indexOf(foodName)
        foodListClone.splice(i, 1);

        this.setState({
            foodsForToday: foodListClone
        })

    }

    renderFoods(foods, foodsForToday) {
        let foodsToRender = foods.map(food => {
            if (foodsForToday) {
                return <li>{`${food.quantity} ${food.name} = ${food.quantity*food.calories} calories`} <button onClick={() => this.removeFood(food.name)}>Remove</button></li>
            } else {
                return <FoodBox key={food.name} food = {food} addToday = {this.handleAddFoodForToday.bind(this)}/>
            }
        });
        return foodsToRender;
    }

    calculateTotalCalories(foods) {
        if (foods.length === 0) {
            return 0
        } else {
            let total =  foods.reduce( (acc, curr) => {
                return (acc + (curr.calories * curr.quantity))
            }, 0)

            return total;
        }
        
    }


    addFoodHandler(food) {

        let {foodName, calories, image, quantity} = food;
        let foodListClone = JSON.parse(JSON.stringify(this.state.foodList)); //deep copy

        foodListClone.push({name: foodName, calories, image, quantity});

        this.setState({
            foodList: foodListClone
        })

    }

    retrieveSearch(search) {
        let filteredFoods = this.state.foodList.filter(food => {
            return food.name.toLowerCase().includes(search.searchString.toLowerCase()) 
        })

        this.setState({
            foodList: filteredFoods
        })

    }

    handleAddFoodForToday(food) {
        
        let foodListClone = JSON.parse(JSON.stringify(this.state.foodsForToday)); //deep copy

        if (foodListClone.some(foodInList => foodInList.name === food.name)) {
            let i = foodListClone.map(e => e.name).indexOf(food.name)
            foodListClone[i].quantity =  foodListClone[i].quantity + food.quantity
        } else {
            foodListClone.push(food);
        }

        this.setState({
            foodsForToday : foodListClone
        })
    }

    render () {
        return(
            <React.Fragment>
                <AddFood addFoodToList = {this.addFoodHandler.bind(this)}/>
                <SearchBar triggerSearch={this.retrieveSearch.bind(this)}/>
                <div className = "listsContainer">
                    <div>{this.renderFoods(this.state.foodList, false)}</div>
                    <div>
                        <h1>Today's Food</h1>
                        {this.renderFoods(this.state.foodsForToday, true)}
                        <ul><li>{`Total: ${this.calculateTotalCalories(this.state.foodsForToday)} calories`}</li></ul>
                        </div>
                </div>
            </React.Fragment>  
        );
    }
}

export default FoodList;