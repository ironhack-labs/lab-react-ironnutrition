import React, { Component } from "react";
import foods from '../foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import TodaysFood from './TodaysFood';


class FoodBoxDynamic extends Component {
    constructor() {
        super();
        this.state = {
            foods: foods,
            displayForm: false,
            searchInput: "",
            todaysFood: []
        }
    }

    toggleForm = () => {
        this.setState({ displayForm: !this.state.displayForm })
      }

    addFoodHandler = (someFood) => {
        this.setState({
            foods: [...this.state.foods, someFood]
        });
        
    }

    handleSearch = (event) => {               
        this.setState({
            searchInput: event.target.value
        });
    }

    addTodaysFoodHandler = (foodElem, quantity) => {
        const copyTodaysFood = [...this.state.todaysFood]
        const food = {
            name: foodElem.name,
            calories: foodElem.calories,
            image: foodElem.image,
            quantity: quantity
        }
        
        copyTodaysFood.push(food);
        this.setState({ todaysFood: copyTodaysFood })
    }

    render() {                               
        const filteredFood = this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
        const filteredFoodJSX = filteredFood.map((oneFood, index) => {
            return <FoodBox addTodaysFood = {this.addTodaysFoodHandler} key = {index} {...oneFood}/>;
        })

        const todaysFoodJSX =  this.state.todaysFood.map((oneTodaysFood, index) => {
            return <TodaysFood {...oneTodaysFood} key={index} />
          })
        
        
        return(
            <div>
                <input type = "search" value={this.state.searchInput} onChange={this.handleSearch}/>
                <div className = "addFood-container">
                    <button onClick={this.toggleForm}>
                    {/* {this.state.displayForm ? 'Hide Add Food Form' : 'Display Add Food Form'} */}
                    Add Food
                    </button>

                    {this.state.displayForm ? <AddFood addSomeFood = {this.addFoodHandler} toggleForm = {this.toggleForm}/> : null}
                </div>
                <div className="columns">
                    <div className="column">                    
                        {filteredFoodJSX}
                        {/* {filteredFood.map((oneFood, index) => {
                            return <FoodBox key = {index} {...oneFood}/>;
                        })} */}
                    </div>
                    <div className="column">
                    <h1>Today´s foods</h1>
                    {todaysFoodJSX}
                    </div>
                </div>
            </div>
        )        
    }
}

export default FoodBoxDynamic;