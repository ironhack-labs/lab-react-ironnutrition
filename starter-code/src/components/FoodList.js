import React from 'react';
import { FoodBox } from './FoodBox';
import { NotFoundMessage } from './NotFoundMessage';

export const FoodList = ({ food, todayFood, setTodayFood }) => {
    return (
        <div className="column is-three-quarters">
            <div className="columns is-desktop is-multiline">
                {
                    food.length ?
                        food.map((f, i) => {
                            return <FoodBox key={i} food={f} todayFood={todayFood} setTodayFood={setTodayFood} />
                        }) :
                        <div className="column">
                            <NotFoundMessage>No food was found with your criteria, please try again.</NotFoundMessage>
                        </div>
                }

            </div>
        </div>
    )
}