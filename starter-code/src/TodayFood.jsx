import React, { Component } from 'react';

class TodayFood extends Component {

    showListOfFoods = () => {
        console.log(this.props.listOfFoods)
        let foods = this.props.listOfFoods
        
        for(let key in foods) {
            console.log(foods[key])
            return (
            <ul>
                <li>name: {foods[key].name}</li>
                <li>calories: {Number(foods[key].quantity) * Number(foods[key].calories)}</li>
            </ul>
            )
        }
    }

    render() {
        return (
            <div>
                Today's Food
                {this.showListOfFoods()}
            </div>
        );
    }
}

export default TodayFood;