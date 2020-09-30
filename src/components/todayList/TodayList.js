import React, { Component } from 'react';

class TodayList extends Component {

    constructor() {
        super()
        this.state = {

            food: [],
            showForm: false
        }
    }

    render() {
        return (

            <div className='food-list'>

                <h2 className='today-title'>Today's food</h2>

                <ul>

                    {this.props.foodList.map((elm, idx) => <li key={idx}>{elm.quantity} {elm.name} = {elm.calories * elm.quantity} cal</li>)}

                </ul>

                <p className='total-calories'>Total: {this.props.foodList.length && this.props.foodList.reduce((acc, elm) => acc + elm.totalCalories, 0)} cal</p>

            </div>

        )
    }
}

export default TodayList;