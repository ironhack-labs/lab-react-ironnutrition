import React from 'react';



function FoodsToBuy( props ) {
    console.log(props)
    

    const list = props.foodsToBuy.map(item => {
        const { name, quantity, calories } = item;

        return (
            <li>{quantity} {name} = {quantity * calories}</li>
        )
    })

    const sumCalories = props.foodsToBuy.reduce((acc, value) => {
        return acc + (value.calories * value.quantity);
    },0
    );


    return (

        
		<div className="column content">
			<h2 className="subtitle">Today's foods</h2>
			<ul>
				{list}
			</ul>
            <div>
			{sumCalories === 0 ? 'Nothing Selected yet' : <strong>Total: {sumCalories} cal</strong>}
            </div>
		</div>
	);
}


export default FoodsToBuy
