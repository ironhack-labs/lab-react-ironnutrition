import React, { Component } from "react";
import foods from '../foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';
//import SearchFood from './SearchFood';

class FoodBoxDynamic extends Component {
    constructor() {
        super();
        this.state = {
            foods: foods,
            displayForm: false,
            searchInput: ""
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

    render() {                               
        const filteredFood = this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
        const filteredFoodJSX = filteredFood.map((oneFood, index) => {
            return <FoodBox key = {index} {...oneFood}/>;
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

                <div>                    
                    {filteredFoodJSX}
                    {/* {filteredFood.map((oneFood, index) => {
                        return <FoodBox key = {index} {...oneFood}/>;
                    })} */}
                </div>
            </div>
        )        
    }
}

export default FoodBoxDynamic;