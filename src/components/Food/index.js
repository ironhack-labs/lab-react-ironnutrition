import React, { Component } from 'react'
import foods from "../../foods.json"
import AddNewFood from '../AddNewFood'
import FoodBox from '../FoodBox'
import Search from '../Search'

export default class Food extends Component {
        state = {
                listFoods: foods,
                showForm: false,
                searchValue: '',
                todayList: [],
                amount: 0,
        }

        addFood = (newFood) => {
                const listFoods = [...this.state.listFoods];
                listFoods.unshift(newFood)
                this.setState({ listFoods, showForm: false });

        }

        handleButtonFormAdd = () => {
                this.setState({ showForm: !this.state.showForm })
        }

        handleSearch = (value) => {
                const filteredList = foods.filter(food => food.name.toLowerCase().includes(value.toLowerCase()));
                this.setState({
                        searchValue: value,
                        listFoods: filteredList
                });
        }
        addFoodOnTodayList = (food, datatype) => {

                if (datatype === 'add') {
                        const findFoodOnTodayList = [...this.state.todayList].find(item => item.name === food.name);
                        if (findFoodOnTodayList) {
                                food.quantity = findFoodOnTodayList.quantity + food.quantity;
                                food.calories = food.calories * food.quantity;

                                const newTodayList = [...this.state.todayList].filter(item => item.name !== food.name);
                                newTodayList.push(food)
                                this.setState({
                                        todayList: newTodayList,
                                        amount: this.state.amount + food.calories
                                })

                        } else {
                                this.setState({
                                        todayList: [...this.state.todayList, food],
                                        amount: this.state.amount + food.calories
                                })
                        }


                } else {
                        this.setState({
                                listFoods: [...this.state.listFoods].filter(product => product.name !== food.name)
                        })
                }

        }
        render() {

                return (
                        <div>
                                <h1>IronNutrition</h1>
                                <button onClick={this.handleButtonFormAdd}>Add new food</button>

                                <div style={{ display: this.state.showForm ? 'flex' : 'none' }} >
                                        <AddNewFood handleAddNewFood={this.addFood} />
                                </div>

                                <Search handleSearch={this.handleSearch} />
                                <div>
                                        {this.state.listFoods.map((food, i) => {
                                                return (
                                                        <FoodBox key={i}
                                                                food={food}
                                                                addFoodOnTodayList={this.addFoodOnTodayList}

                                                        />
                                                )
                                        })}
                                </div>
                                <div>
                                        <h1>Today's foods</h1>
                                        <ul>
                                                {this.state.todayList.map((food, index) =>
                                                        <li key={index}>{food.quantity} {food.name} = {food.calories} cal</li>
                                                )}
                                        </ul>
                                        <p>Total:{this.state.amount} cal</p>
                                </div>


                        </div>
                )
        }
}
