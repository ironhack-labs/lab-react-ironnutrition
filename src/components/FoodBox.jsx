import React, { Component } from 'react';
import foods from '../data/foods.json';
import AddFood from './AddFood';
import Food from './Food';

export default class FoodBox extends Component {
    constructor(props) {
        super(props)
        this.addFood = this.addFood.bind(this)
        this.newSearch = this.newSearch.bind(this)
    }

    state = {
        foodBox:foods,
        formActive:false
    }

    newSearch(e) {
        e.preventDefault();
        if (e.target.value !== ''){
                let search = e.target.value;
                let searchResults = this.state.foodBox.filter((e) => {
                    return e.name.toLowerCase().includes(search.toLowerCase());
                });  
            this.setState({ 
                foodBox: searchResults
            })
            }
            else{
                this.setState({
                    foodBox:foods
                })
            }
    };

    toggleForm = () => {
        this.setState({
            formActive: !this.state.formActive
        })
    }
    
    addFood(newFood) {
        let foodBoxCopy = [...this.state.foodBox];
        foodBoxCopy.push(newFood);
        this.setState({
            foodBox: foodBoxCopy
        })
    }

    render() {
        return (
            <div>
                <div>
                <input
                    type="text"
                    class="input search-bar"
                    name="search"
                    placeholder="Search"
                    onChange={this.newSearch}
                />
                </div>
                <button class="button" onClick={this.toggleForm}>Add Food</button>
                {
                this.state.formActive ?
                <AddFood addFood = {this.addFood}/>:
                <div></div>
                }
                {
                    this.state.foodBox.map((food, index) => 
                    <Food
                        index={`${index}-${food.name}`}
                        image={food.image}
                        name={food.name}
                        calories={food.calories}
                    />
                    )
                }
            </div>
      
        )
    }
}
