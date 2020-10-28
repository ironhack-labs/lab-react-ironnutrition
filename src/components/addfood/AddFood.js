import React from 'react'

const AddFood = (props) => {
    return (
        <React.Fragment>
            <form onSubmit={props.onSubmit}>
                <input type="text" placeholder="Add food name" name="name"></input>
                <br />
                <input type="number" placeholder="Add food calories" name="calories"></input>
                <br />
                <input type="text" placeholder="Add food image URL" name="image"></input>
                <br />
                <button className="button" type="submit">Add food</button>
            </form>
        </React.Fragment>
    )
}

export default AddFood