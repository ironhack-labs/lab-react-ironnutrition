import React from "react";

function AddFood({ handleCreate, setName, setImage, setCalories, setServings }){
    return(
        <form onSubmit={handleCreate}>
            <label>
            Name:
            <input
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
            />
            </label>

            <br />

            <label>
            Image:
            <input
                type="text"
                name="image"
                onChange={e => setImage(e.target.value)}
            />
            </label>

            <br />

            <label>
            Calories:
            <input
                type="number"
                name="calories"
                onChange={e => setCalories(e.target.value)}
            />
            </label>

            <br />

            <label>
            Servings:
            <input
                type="number"
                name="servings"
                onChange={e => setServings(e.target.value)}
            />
            </label>

            <button type="submit">Create</button>
        </form>
    )
}

export default AddFood