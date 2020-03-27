import React from 'react';
import { FoodBox } from './FoodBox';

export const FoodList = ({ food, todayFood, setTodayFood }) => {
    return (
        <div className="column is-three-quarters">
            <div className="columns is-desktop is-multiline">
                {food.length && food.map((f, i) => {
                    return <FoodBox key={i} food={f} todayFood={todayFood} setTodayFood={setTodayFood} />
                })}
            </div>
        </div>
    )
}