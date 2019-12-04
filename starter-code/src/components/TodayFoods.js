import React from 'react'

export default function TodayFoods(props) {
    
    const todayFoods = props.todayFoods;
    let caloriesCounter = 0;
    
    return (
        <div>
            {
                todayFoods.map((food,index) => {
                    caloriesCounter += food.calories * food.quantity;
                    console.log(caloriesCounter);
                    return (
                        <h3 key={index}>{food.name}</h3>
                    )
                })
            }
        </div>
    );
}
