import React from 'react'

function TodaysFoods(props) {

    const {foods} = props;

    let total = foods.reduce((acc, food) => {
        return acc + (food.calories * food.quantity)
    },0)


    return (
        <div>
            <h3> Today's foods:</h3>
            {
                foods.map((food) => {
                    return (
                        <div>
                            {food.name} x {food.quantity} = {food.quantity * food.calories}
                        </div>
                    )
                })
            }

            <h3>
                Total calories: {total}
            </h3>    
        </div>    
    )   
}


export default TodaysFoods;