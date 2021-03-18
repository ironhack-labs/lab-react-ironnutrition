import React, { Component } from 'react';
import './../views/Flex.css'

export class TodayFood extends Component {
    render() {
        const {todayFood} = this.props;

        const uniqueArr = [];
        todayFood.map(food => uniqueArr.filter(a => a.name === food.name).length > 0 ? null : uniqueArr.push(food));

        let totalCal;
        if(uniqueArr.length !== 0) {
            totalCal = uniqueArr.reduce((a, b) => {
                return a + b.calories
            }, 0)
        } else {
            totalCal = "";
        }
        
        return (
            <div className="TodayFood">
                <h1>Today's Food</h1>
                
                {uniqueArr.map((food, index) => 
                    <div key={index}>
                        <p>☞ {food.quantity} {food.name} : {food.calories} cal</p>
                    </div>
                )}


                <p>total cal : {totalCal}</p>
            </div>
        )
    }
}

export default TodayFood
