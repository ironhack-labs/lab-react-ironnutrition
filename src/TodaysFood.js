import React, { Component } from 'react';

class TodaysFood extends Component {
    
    render() {
        debugger
        console.log('hohohohhoho',this.props)
        return (
            <div>
                <h1>Today's Food</h1>
                <ul>
                {
                        this.props.foodNames.map((oneItem, index) => {
                        return(
                        <li>{oneItem}</li>
                        )
                        })
                }
                </ul>
        <p>Total:{this.props.totalCal}cal</p>
            </div>
        );
    }
}

export default TodaysFood;
