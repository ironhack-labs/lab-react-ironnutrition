import React, { Component } from 'react'

export class TodayFood extends Component {

    render() {
        const {selectItems} = this.props
        
        const totalCalories = selectItems.reduce((acc, food) => acc + (food.calories*food.quantity),0)

        return (
            <div className="TodayFood" >
                <h1>Today's Food</h1>
                <ul>
                   {selectItems.map(item => 
                        <li key={item.name}>{item.quantity} {item.name}</li>
                    )}
                    
                </ul>

                <p>Total: {totalCalories} calories</p>
            </div>
        )
    }
}

export default TodayFood
