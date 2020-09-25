import React from 'react';

const AddFood = (props) => {
    return (
        <form id="addFoodForm" onSubmit={props.onAdd}>
            <div className="field is-horizontal">
                <label class="label">Food Name</label>
                <input name="name" className="input" type="text" placeholder="eg Tomato"></input>
            </div>
            <div className="field is-horizontal">
                <label class="label">Calories</label>
                <input name="calories" className="input" type="number" placeholder="eg 200"></input>
            </div>
            <div className="field is-horizontal">
                <label class="label">Image URL</label>
                <input name="image" className="input" type="text" placeholder="Image URL"></input>
            </div>
            <button className="button is-success is-outlined" type="submit">Submit</button>
        </form>
    )
}

export default AddFood