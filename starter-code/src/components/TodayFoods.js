import React from 'react'

export default function TodayFoods(props) {
    
    const todayFoods = props.todayFoods;
    let caloriesCounter = 0;
    
    return (
        <div>
            <ul>
            {
                todayFoods.map((food,index) => {
                    caloriesCounter += food.calories * food.quantity;
                    console.log(caloriesCounter);
                    return (
                        <li key={index}>{food.quantity} {food.name} = {food.calories*food.quantity} cals</li>
                    )
                })
            }
            </ul>
            <h2>Total: {caloriesCounter}</h2>
        </div>
    );
}
