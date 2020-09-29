import React from 'react'

export default function FoodSelected(props) {

    return (
        <div>
            <h1 className="add-food" style={{ marginTop: '0px' }}>Today Food List</h1>
            <ul style={{ paddingLeft: '25px' }}>
                {props.foods.map((food, index) =>
                    food.quantity !== 0 &&
                    <li key={food.name}>{food.quantity} {food.name} {food.calories} Cal.</li>
                )}
            </ul>
        </div>
    )
}
