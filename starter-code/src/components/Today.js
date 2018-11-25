import React from 'react';
import TodayChild from "./TodayChild";

const Today = ({todaysFoods,foods,totalCalories,onClick}) => (
    <div>
        <h2>Today's foods</h2>
        <ul>
            {todaysFoods.map((index,i) => <TodayChild onClick={onClick} index={index} key={i} foods={foods}/>)}
        </ul>
    <span>Total calories: {totalCalories}</span>
    </div>
);


export default Today