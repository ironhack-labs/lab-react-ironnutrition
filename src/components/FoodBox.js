import React, { useState } from "react";
import FoodForm from "./FoodForm";

const FoodBox = (foods, setFoods) => {
    const quantitiesInitialValue = [];

    for (let i = 0; i < foods.length; i += 1) {
        quantitiesInitialValue[i] = 0;
    };

    const [quantities, setQuantity] = useState(quantitiesInitialValue);

    const handleQuantityChange = (event, index) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = event.target.value;
        setQuantity(updatedQuantities);
    };

    const [selectedFoods, setAdd] = useState([]);

    const handleSelectedFoodsAdd = (food, index) => {
        if (quantities[index] > 0) {
            const updatedFoods = [...foods];
            updatedFoods[index].quantity = quantities[index];
            setFoods(updatedFoods);

            setAdd([...selectedFoods, food]);
        };
    };

    return {
        selectedFoods,
        foodBox :(
            <div className="column">
                <FoodForm foods={foods} setFoods={setFoods} />
                {foods.map((food, i) => (
                    <div key={food.name} className="box">
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
                                        <input
                                            className="input"
                                            type="number"
                                            value={quantities[i]}
                                            onChange={e => handleQuantityChange(e, i)}
                                        />
                                    </div>
                                    <div className="control">
                                        <button className="button is-info" onClick={() => handleSelectedFoodsAdd(food, i)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        )
    };
};

export default FoodBox;