import React from 'react'

export default function TodaysFoods({ foods }) {
    console.log(foods);


    // créer tableau de food.calories qui se push à chaque nouvelle valeur ?
    const total = foods.reduce((acc, food) => acc + (food.calories * food.quantity), 0);

    return (
        <div className="todays-food">

            <h2>Today's foods</h2>

            {/* s'affiche que si on clique sur le bouton "+" */}
            <ul className="total-todays-foods">
                {foods.map((food, i) => (
                    < li key={i} > {food.quantity} {food.name} = {food.calories} cal</li>
                ))
                }

                <p className="total-calories">
                    Total: {total} cal<br />
                </p>
            </ul>

        </div >
    )
}
