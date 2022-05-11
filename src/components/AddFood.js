import React, { useState } from "react";

function AddFood(props) {
    // hooks
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");

    const [isActive, setActive] = useState(true);
    // function to submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setFoods(prevValue => {
            const newList = [...prevValue];
            newList.unshift({ name: name, calories: calories, image: image })
            return newList;
        })
        setName("");
        setCalories("");
        setImage("");
        setActive(false)
    }

    return (
        <div>
        <br />
            <form className={isActive ? "Show" : "Hide"} onSubmit={handleSubmit}>
                <input required className="input" type="text" name="name" placeholder="Food name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input required className="input" type="number" name="calories" placeholder="Number of calories" value={calories} onChange={(e) => { setCalories(e.target.value) }} />
                <input required className="input" type="text" name="image" placeholder="URL of image" value={image} onChange={(e) => { setImage(e.target.value) }} />
                <button className="button is-info">+ Add</button>
            </form>
            <div className="box has-text-centered">
            <button className="button is-info" onClick={() => setActive(!isActive)}> {isActive ? "Hide" : "Show"} </button>
            </div>
        </div>
    )

}
export default AddFood;