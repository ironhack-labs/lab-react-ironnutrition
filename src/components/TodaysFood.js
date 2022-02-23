import React from "react";

function TodaysFood(props) {
    const { allFoods, setQuantity } = props;
    const selectedFoods = [...allFoods].filter(food => food.quantity > 0);
    const totalCalories = selectedFoods.reduce((acc, curr)=> {
        return acc + (curr.calories)*(curr.quantity);
    }, 0);

    function handleDelete(deletedFood) {
        setQuantity(deletedFood, 0);
    }

    return (
            <div>
                <ul>
                    { selectedFoods.map(food => {
                        return (
                            <div className="selectedFood">
                                <li display="inline"key={food.name}>{food.quantity} {food.name}</li>
                                <button onClick={()=> handleDelete(food.name)}>Delete</button>
                            </div>
                        )
                    })}   
                </ul>
                <p>Total Calories: {totalCalories}</p>
            </div>
            )
}


export default TodaysFood;