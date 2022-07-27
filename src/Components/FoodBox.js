import React from 'react';

function FoodBox(props) {
    return (
        <>
            {props.foodsArr.map((e) => (
                <div>
                    <p> {e.name} </p>
                    <img src={e.image} width={200} />
                </div>
            ))}
        </>
    );
}

export default FoodBox;