import React from 'react'
import foods from '../foods.json'

import AddFood from './AddFood'
import FoodSelected from './FoodSelected';
import FoodCard from './FoodCard'


export default class FoodList extends React.Component {

    constructor(props) {
        super();

        foods.map((food) => this.state.foodArray.push(food))
    }

    state = {
        search: '',
        foodArray: [],
        newFood: '',
        newCal: '',
        newImg: '',
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            // disabledButton: event.target.name === '' ? true : false
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
        this.setState({ foodArray: [newFoodAdd, ...this.state.foodArray] })
    }

    addFoodList = (event) => {
        this.state.foodArray[event.target.id].quantity++
        this.setState(this.state.foodArray)
    }

    render() {
        const filterdArr = this.state.foodArray.filter(food => food.name.toLowerCase().includes(this.state.search.toLowerCase()))

        return (
            <div>   
                <div className="columns">
                    <div className="column has-text-left">
                        <AddFood onChange={this.handleOnChange} onSubmit={this.onSubmit} food={this.state.newFood} cal={this.state.newCal} img={this.state.newImg}></AddFood>


                        <div className="field">
                            <label className="label">Food Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Search Food" name="search" onChange={this.handleOnChange} />
                            </div>
                        </div>


                        <div className="food-list">
                            {filterdArr.map((food, index) =>
                                <FoodCard addFoodList={this.addFoodList} foodElem={food} index={index} key={food.name} />
                            )}
                        </div>
                    </div>
                    <div className="column has-text-left">
                        <FoodSelected foods={filterdArr} />
                    </div>

                </div>

            </div>
        )
    }
}

