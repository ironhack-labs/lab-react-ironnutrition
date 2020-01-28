import React, { Component } from 'react'

export default class FoodToday extends Component {

    removeFromTodaysList = ( event, foodId ) => {
        this.props.removeFoodsTodayListHandler( foodId );
    }

    render() {
        let total = 0;
        let output = this.props.foodList.map( (oneFood ) => {
            total += ( oneFood.calories * oneFood.quantity );
            return( <li key={"FT"+oneFood.ind}>{ oneFood.quantity } { oneFood.name } { oneFood.calories } cal
                        <button className="button is-danger is-small" style={{margin:"2px 0px 2px 20px"}} onClick={(e)=>{this.removeFromTodaysList(e , oneFood.ind)}}>-</button>
                    </li> );
            });

        return (
            <div>
            <ul>
                { output }
            </ul>
            <hr />
            <p>Total: { total } cal</p>
            </div>
        )
    }
}
