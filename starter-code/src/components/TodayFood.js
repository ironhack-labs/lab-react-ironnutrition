import React from 'react';
import _ from 'lodash';

export const TodayFood = ({ todayFood }) => {

    const food = _.groupBy(todayFood, 'name');

    return (
        <div className="column is-one-quarter food-added">
            <h2 className="title is-4">Today's food</h2>
            <div class="content">
                <ul>
                    {
                        _.keys(food).map((name, i) => {
                            const totalQty = _.sumBy(food[name], 'quantity');
                            const calories = _.first(food[name])['calories'];
                            return <li key={i}>
                                {`${totalQty} ${name} = ${calories * totalQty} calories`}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}