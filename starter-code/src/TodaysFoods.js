import React, { Component } from 'react';
import foods from './foods.json'


class TodaysFoods extends Component {

    state = {
        todaysFoods: [
            {
                name: "Pizza",
                quantity: 0,
                calories: 0,
            },
        ]
    }


    render() {



        return (<div>

            {this.state.todaysFoods.map((food, idx) => {
                return <div>
                    <p>{food.name}</p>
                    <p> {food.calories}</p>
                    <p> {food.quantity}</p>

                </div>
            })};

        </div >
        )
    }
}

export default TodaysFoods;