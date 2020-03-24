import React, { useContext } from "react";
import { FoodContext } from "../App";
import _ from "lodash";

export const FoodBox = ({ food }) => {
    const { foods, setFoods, todayFoods, setTodayFoods } = useContext(FoodContext);

    const handleAdd = (food) => {
        if (food.quantity > 0 && !_.includes(todayFoods, food)) setTodayFoods([...todayFoods, food]);
    }

    const handleQuantities = (food, num) => {
        const newFoods = [...foods]
        _.find(newFoods, food).quantity = num;
        setFoods(newFoods);
    }


    return (
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
                            <input
                                className="input"
                                type="number"
                                value={food.quantity}
                                onChange={(e) => {
                                    if (e.target.value >= 0) { handleQuantities(food, e.target.value) }

                                }}
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={() => handleAdd(food)}>
                                +
        </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>)
};
