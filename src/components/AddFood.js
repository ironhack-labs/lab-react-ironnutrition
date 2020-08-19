import React    from 'react'

function AddFood(props){
    return (
        <form onSubmit={props.onAdd}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input name="name" className="input" type="text" placeholder="Name of item"></input>
                </div>
            </div>

            <div className="field">
                <label className="label">Calories</label>
                <div className="control">
                    <input name="calories" className="input" type="number" placeholder="Number of calories"></input>
                </div>
            </div>

            <div className="field">
                <label className="label">Image</label>
                <div className="control">
                    <input name="image" className="input" type="text" placeholder="Image of item"></input>
                </div>
            </div>

            <div className="control">
                <button type="submit" className="button is-link">Submit</button>
            </div>
        </form>
    )
}

export default AddFood;