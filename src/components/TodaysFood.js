import React from 'react'; 

export default function TodaysFood(props) {
    let totalCaories = 0;
    let quantity = 0;
    return (
        <section className="todays">
            <h2>Today's Food</h2>
            {props.food.map((item, index) => {
                totalCaories += (item.calories * item.quantity)
                return (
                <>
                <p>{item.quantity} {item.name}, {item.calories} cals</p>
                </>
                )
            })}
            <p className="totalCals">Total calories: {totalCaories}</p>
        </section>
    )
}