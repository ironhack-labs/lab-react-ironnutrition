import React from 'react';

function FoodBox(props) {
    return (
        <>
            {props.foodsArr.map((e) => (
                <div>
                    <p> {e.name} </p>
                    <img src={e.image} width={200} alt={e.name} />
                    <p>Calories:  {e.calories} kcal</p>
                    <p>Servings: {e.servings}</p>                    
                </div>
            ))}
        </>
    );
}

export default FoodBox;