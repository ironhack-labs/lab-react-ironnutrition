import React from 'react';

function Button({ nameButton, isForm, isSubmit, name, calories, image, updateState, foods }) {

    const action = () => {
        if (isSubmit) {
            const newFood = {
                name,
                calories,
                image,
                quantity: 0
            }

            const newFoods = foods.concat(newFood);
            updateState(newFoods);
        }
    }

    return (
        <button onClick={action}>{nameButton}</button>
    )
}

export default Button;
