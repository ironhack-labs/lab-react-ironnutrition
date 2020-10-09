import React, { Component } from 'react'
import FoodBox from './FoodBox';
import FoodSearch from './FoodSearch';
import MenuList from './MenuList';
import TotalCalories from './TotalCalories';
import AddFood from './AddFood'

export default class FoodList extends Component {

    constructor(props) {
        super(props)
        this.props.foods.map((food) => this.state.foodsArray.push(food))
    }

    state = {
        search: '',
        foodsMenu: [],
        foodsArray: []
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    addFoodMenu = (food, quantity) => {
        this.setState(
            {
                foodsMenu:
                    [...this.state.foodsMenu.filter(f => f !== food),
                        food]
            })

        food.quantity = quantity

    }

    deleteFoodMenu = (food) => {
        console.log(food);
        this.setState({
            foodsMenu: this.state.foodsMenu.filter(e => e !== food)
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        const newFoodAdd = {
            name: this.state.newFood,
            calories: this.state.newCal,
            image: this.state.newImg,
            quantity: 0
        }
        this.setState({ foodsArray: [newFoodAdd, ...this.state.foodsArray] })
    }

    render() {

        console.log(this.state.foodsArray);


        const filteredFoods = this.state.foodsArray.filter(food => food.name.toLowerCase().includes(this.state.search.toLowerCase()))

        return (
            <div className="columns">
                <div className="column has-text-left">
                    <AddFood
                        onChange={this.handleOnChange}
                        onSubmit={this.onSubmit}
                        food={this.state.newFood}
                        cal={this.state.newCal}
                        img={this.state.newImg}>

                    </AddFood>

                    <FoodSearch onChange={this.handleOnChange} value={this.state.search} key="search" />

                    {filteredFoods.map(food =>
                        <FoodBox
                            food={food}
                            key={food.name}
                            value={this.state.search}
                            addFoodMenu={this.addFoodMenu}
                        />
                    )}
                </div>
                <div className="column has-text-left">
                    <div className="pl-5">
                        <p className="add-food today">Today's foods</p>
                        <ul>
                            {this.state.foodsMenu.map(food =>
                                <MenuList
                                    foodsMenu={this.state.foodsMenu}
                                    food={food}
                                    deleteFoodMenu={this.deleteFoodMenu} />
                            )}

                            <TotalCalories foodsMenu={this.state.foodsMenu} />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
