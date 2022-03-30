import React, { Component } from 'react'

class TodaysFood extends Component {

    render() {
        return (
            <div>
                <h2 className='mb-4'>Today's food</h2>
                <ul>
                    {this.props.foods.map((food, index) => {
                        return(
                            <div key={index} className="list-item">
                                <li>{food.quantity} <strong>{food.name}</strong> = {food.calories * food.quantity} cal</li>
                                <button className="button is-danger x-button" onClick={() => this.props.removeFromTodaysFood(food)}>x</button>
                            </div>
                        )
                    })}
                </ul>
                {this.props.foods.length && 
                <p className='mt-4'>Total: {this.props.foods.reduce((acc, cur) => acc + (cur.calories * cur.quantity), 0)} cal</p>}
            </div>
        )
    }
}

export default TodaysFood