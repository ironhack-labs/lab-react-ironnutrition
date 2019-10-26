import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox.js'
import AddFood from './AddFood.js'

class FoodList extends Component {

    state = {
        foods: foods,
        // searchFoods: []
    }

    // randomClickHandler = (index) => {

    //     let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    //     console.log("randomContact", randomContact)
    //     this.state.contacts.push(randomContact)

    //     this.setState({
    //         contacts: this.state.contacts
    //     })
    // }

    // sortNameClickHandler = (index) => {

    //     let sortByName = contacts[Math.floor(Math.random() * contacts.length)]
    //     console.log("randomContact", sortByName)
    //     this.state.contacts.push(sortByName)

    //     this.setState({
    //         contacts: this.state.contacts
    //     })
    // }

    // sortPopClickHandler = (index) => {

    //     let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    //     console.log("randomContact", randomContact)
    //     this.state.contacts.push(randomContact)

    //     this.setState({
    //         contacts: this.state.contacts
    //     })
    // }

    // deleteHandler = (index) => {
    //     this.setState({
    //         contacts: this.state.contacts.filter((e, i) => i !== index)
    //     })
    // }




    addOneFood = (name, calories, quantity, image) => {
        const newArr = [{ name: name, calories: calories, quantity: quantity, image: image }, ...this.state.foods]
        this.setState({
            foods: newArr
        })

    }

    changeHandler = (event) => {
        if (event.target.value !== "") {
            const searchTermUp = event.target.value.toUpperCase()
            const searchTermLow = event.target.value.toLowerCase()
            const searchFoods = this.state.foods.filter((e, i) => e.name.startsWith(searchTermUp) || e.name.startsWith(searchTermLow))
            this.setState({
                foods: searchFoods
            })
        } else {
            this.setState({
                foods: foods
            })
        }
    }

    // {
    //     "name": "Pizza",
    //     "calories": 400,
    //     "image": "https://i.imgur.com/eTmWoAN.png",
    //     "quantity": 0
    //   }
    render() {

        console.log(this.state.foods)

        return (
            <div>

                <h1>IronNutrition</h1>

                <input
                    placeholder="searchterm"
                    onChange={this.changeHandler}
                ></input>


                <AddFood onNewFood={this.addOneFood} />
                <button onClick={this.sortNameClickHandler}>Sort by name</button>
                <button onClick={this.sortPopClickHandler}>Sort by Popularity</button>

                <ul>

                    {this.state.foods.map((food, index) => {

                        return <FoodBox
                            {...food}
                            key={index}

                            onDelete={() => this.deleteHandler(food, index)} />
                    }
                    )}
                </ul>

            </div>
        );
    }
}

export default FoodList;