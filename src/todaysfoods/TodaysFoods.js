import React, { Component } from 'react';
import "./TodaysFoods.css";

export default class TodaysFoods extends Component {
    
    render() {
        const { todaysFoodsList, totalCalories } = this.props;
        return (
            <div>
                <h1 className="title is-2">Today's foods</h1>
                <ul>
                    {
                        todaysFoodsList.map((todaysFood, i) =>{
                            const { name, calories, quantity } = todaysFood;
                            return <li className="todaysfood-elem" key={`todayFoods-${i}`}>{`${quantity} ${name} = ${calories}cal`}</li>
                        })
                    }
                </ul>
                <h4 className="title is-4">Total: {totalCalories} cal</h4>                
            </div>
        )
    }
}
