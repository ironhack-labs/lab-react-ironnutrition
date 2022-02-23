import React from "react";

function FoodSelection(props) {

    const { selectedFoods, unselectFood } = props;

    return(
        <div className="has-text-left content">
            <h1 className="title">Today's Foods</h1>
            <ul className="list">
                { 
                    selectedFoods.map((food, index) => {
                        return (
                            <li key={ index } className="list-item">
                                { food.quantity } { food.name } = { food.calories * food.quantity } kcal 
                                <button className="button is-small ml-2" onClick={ () => unselectFood(food.name) }>  <span role="img" aria-label="trophy">🗑</span> </button>
                            </li>
                        ) 
                    }) 
                }    
            </ul>
            <p>Total: {selectedFoods.reduce((val, current) => val + (current.calories * current.quantity), 0)} kcal</p>
        </div>
    )
}

export default FoodSelection;

