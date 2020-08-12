import React, { Component } from 'react'
import foodData from '../../foods.json';
import FoodBox from '../FoodBox/FoodBox';
import AddFood from '../AddFood/AddFood';
import SearchFood from '../SearchFood/SearchFood';

export default class FoodList extends Component {
    state = {
        foods: foodData,
        filtered: foodData,
    }

    addFoodHandler = theFood => {
        const foodsCopy = [...this.state.foods];
        foodsCopy.push(theFood);
        this.setState({
            foods: foodsCopy
        })
    }

    handleSearch = (value) => {
        const foodsCopy = [...this.state.foods];

        let newList = foodsCopy.filter(item => {
        const lowerCase = value.toLowerCase();
        return item.name.toLowerCase().includes(lowerCase);
    });
    this.setState({
        filtered: newList
    });
}

    this.handleSearch = this.handleSearch.bind(this);

    render() {
        return (
            <div>

            <AddFood addTheFood={this.addFoodHandler}/>

            <SearchFood searchTheFood={this.handleSearch}/>

            {this.state.foods.map((food, index) => {
                return <FoodBox key={food.image} food={food}/>
                })}
                
            </div>
        )
    }
}

