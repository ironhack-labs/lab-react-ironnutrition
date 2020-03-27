import React from 'react';
import _ from 'lodash';

export const TodayFood = ({ todayFood, setTodayFood }) => {

    let food = _.groupBy(todayFood, 'name');
    let foodArr = _.keys(food).map((name) => ({
        name: name,
        quantity: _.sumBy(food[name], 'quantity'),
        calories: _.first(food[name])['calories'],
    }))

    return (
        <div className="column is-one-quarter food-added">
            <h2 className="title is-4">Today's food</h2>
            <div className="content">
                <ul>
                    {
                        foodArr.map((food, i) => (
                            <li key={i} className="today-food-item">
                                <span>{`${food.quantity} ${food.name} = ${food.calories * food.quantity} calories`}</span>
                                <a className="delete is-small" onClick={(e) => setTodayFood(todayFood.filter(f => f.name !== food.name))}></a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}