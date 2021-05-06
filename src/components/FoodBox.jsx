import React, { useState } from 'react';

const FoodBox = ({ food, addToToday }) => {
    const initialFoodCount = 1;
    const [foodCount, setFoodCount] = useState(initialFoodCount);

    const updateCount = (event) => {
        const { value } = event.target;
        setFoodCount(value)
    }

    const addToTodayHandler = () => {
        addToToday({ foodCount: foodCount, foodName: food.name, totCalories: food.calories * foodCount});
        setFoodCount(initialFoodCount);
    }

    return(
        <div className="box">
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img src={food.image} alt={food.name} />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories} cal</small>
                    </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="number" min={initialFoodCount} value={foodCount} onChange={e => updateCount(e)} />
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick={addToTodayHandler}>
                        +
                    </button>
                    </div>
                </div>
            </div>
        </article>
        </div>
    );
};

export default FoodBox;