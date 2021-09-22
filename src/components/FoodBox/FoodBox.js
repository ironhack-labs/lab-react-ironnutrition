import React from 'react';
import foods from '../../foods.json';
import NewFood from '../NewFood/NewFood';
import FoodList from '../FoodList/FoodList'
import SearchBar from '../SearchBar/SearchBar';
import AddCuantity from '../AddCuantity/AddCuantity';

class FoodBox extends React.Component {

    state = {
        foods: foods
    }


    addFood = (food) => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(food)
        foods.push(food)
        console.log(food)

        this.setState({
            ...this.state,
            foods: foodsCopy
        })
    }

    filterFood = (filtered) => {
        this.setState({
            foods: filtered
        })
    }

    render() {
        return (
            <div>
                <SearchBar list={foods} filterFood={this.filterFood} />
                <FoodList list={this.state.foods} />
                <NewFood addFood={this.addFood} />
                <AddCuantity />
            </div>
        )
    }
}

export default FoodBox