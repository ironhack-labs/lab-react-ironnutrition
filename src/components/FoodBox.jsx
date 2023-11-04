import React from "react";

function FoodBox({ food, handleDelete }){

    if(food.length === 0){
        return <p>Oops! There is no more content to show</p>
    }
    
    return(
        <>
            {food.map(dish => (
                <div className="list" key={dish.id}>
                    <p>{dish.name}</p>

                    <img src={dish.image} />

                    <p>Calories: {dish.calories}</p>
                    <p>Servings: {dish.servings}</p>

                    <p>
                        <b>Total Calories: {dish.calories * dish.servings} </b> kcal
                    </p>

                    <button onClick={() => handleDelete(dish.id)}>Delete</button>
                </div>
            ))}
        </>
    )
}

export default FoodBox