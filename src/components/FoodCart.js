// import { useState } from 'react';

const FoodCart = props => {
    return (
        <div className="food-cart">
            <h2>Today's food</h2>
            <ul>
            {
                props.children ? 
                    props.children.map(food => {
                        return (
                            <li key={'cart ' + food.name}>
                                <p>{`${food.quantity} ${food.name} = ${food.calories * food.quantity} cal`}</p>
                                <button onClick={() => props.deleteFromCart(food.name)}>Delete</button>
                            </li>
                        )
                    })
                :

                null
            }
            </ul>

            <p><strong>Total: {props.children.reduce((acc, food) => acc += food.calories * food.quantity, 0)}</strong></p>
        </div>
    )
}

export default FoodCart;