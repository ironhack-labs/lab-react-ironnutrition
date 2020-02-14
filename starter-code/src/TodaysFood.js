import React, { Component } from 'react';

class TodaysFood extends Component {

    todayList = () => {
            let currentState = this.props.currentState
            let filteredFood = currentState.map(eachFood => {
                
                if (eachFood.listed === true){
                    return (
                    <li className="has-text-left is-family-primary"> {eachFood.quantity} {eachFood.name} = {eachFood.calories} cals </li>
                    )
                }
            })

            

            return filteredFood
    }


    render() {
        let trackCals = this.props.currentState.reduce((acc,value) => {
            
            if(value.quantity>0){
                acc+= value.quantity*value.calories
            }
            return acc 
        },0); // Starts accumulator with 0

        return (
            <div>
                <h2 className="title 1">Today's Food</h2>
                <div>
                    {this.todayList()}
                </div>
                <h4 className="has-text-right is-family-primary">Total cals = {trackCals}</h4>
            </div>
        );
    }
}

export default TodaysFood;