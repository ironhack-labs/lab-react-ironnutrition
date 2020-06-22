import React, { Component } from 'react';

class TodaysFood extends Component {
    
    render() {
        console.log('hohohohhoho',this.props)
        return (
            <div className = "today">
                <h1>Today's Food</h1>
                <ul>
                {
                    this.props.foodNames.map((oneItem, index) => {
                    return(
                    <li>{oneItem} x {this.props.quantity[index]}<a onClick={(e)=>this.props.delete(e, oneItem)}><img src="https://img.icons8.com/material-outlined/24/000000/trash.png"/></a></li>
                    )
                    })
                }
                </ul>
        <p>Total Calories:{this.props.totalCal}cal</p>
            </div>
        );
    }
}

export default TodaysFood;
