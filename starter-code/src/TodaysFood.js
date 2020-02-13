import React, { Component } from 'react';

let totalCals = 0

class TodaysFood extends Component {

    // state = {this.props.stateProp}

    todayList = () => {
            let currentState = this.props.currentState
            let filteredFood = currentState.map(eachFood => {
                
                if (eachFood.listed === true){
                    totalCals+= eachFood.calories

                    return (
                    <div className="has-text-left is-family-monospace">{eachFood.quantity} {eachFood.name} = {eachFood.calories} cals </div>
                    )
                }
            })
            return filteredFood
    }


    render() {
        return (
            <div>
                <h2 className="title 1">Today's Food</h2>
                <h4 className="has-text-left is-family-monospace">Total cals = {totalCals}</h4>
                <div>
                    {this.todayList()}
                </div>
            </div>
        );
    }
}

export default TodaysFood;