import React, { useState, useEffect } from 'react';
import _ from 'lodash';

export const TodayFood = ({ todayFood, setTodayFood }) => {

    const [totalCal, setTotalCal] = useState(0);

    const food = _.groupBy(todayFood, 'name');
    const foodArr = _.keys(food).map((name) => ({
        name: name,
        quantity: _.sumBy(food[name], 'quantity'),
        calories: _.sumBy(food[name], 'quantity') * _.first(food[name])['calories'],
    }))

    useEffect(() => {
        setTotalCal(_.sumBy(foodArr, 'calories'));
    })

    return (
        <div className="column is-one-quarter">
            <div className="food-added">
                <h2 className="title is-4 mt-0">Today's food</h2>
                <div className="content">
                    <ul>
                        {
                            foodArr.map((food, i) => (
                                <li className="today-food-item" key={i}>
                                    <span>{`${food.quantity} ${food.name} = ${food.calories} calories`}</span>
                                    <a className="delete is-small" onClick={(e) => setTodayFood(todayFood.filter(f => f.name !== food.name))}></a>
                                </li>
                            ))
                        }
                    </ul>
                    <div>
                        <b>Total:</b> {totalCal} cal
                    </div>
                </div>
            </div>
        </div>
    )
}