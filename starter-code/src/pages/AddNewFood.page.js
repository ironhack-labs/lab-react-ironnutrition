import React, { useState, useContext } from "react";
import { FoodContext } from "../App";
import { withRouter } from "react-router-dom";



export const AddNewFoodPage = withRouter(({ history }) => {
    //load context
    const { foods, setFoods } = useContext(FoodContext);
    const example = foods[0];

    //form states
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setFoods([...foods, { name, calories, image, quantity: 0 }]);
        history.push("/");
    }


    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder={`e.g ${example.name}`} onChange={e => setName(e.target.value)} value={name} required />
                </div>
            </div>

            <div className="field">
                <label className="label">Calories</label>
                <div className="control">
                    <input className="input" type="number" min="0" placeholder={`e.g ${example.calories}`} onChange={e => setCalories(e.target.value)} value={calories} required />
                </div>
            </div>

            <div className="field">
                <label className="label">Image link</label>
                <div className="control">
                    <input className="input" type="text" placeholder={`e.g ${example.image}`} onChange={e => setImage(e.target.value)} value={image} required />
                </div>
            </div>

            <div className="control">
                <button className="button is-info">Submit</button>
            </div>

        </form >)
});