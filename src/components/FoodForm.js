import React from 'react'

function FoodForm(props) {
    return (
        <form className="form" onSubmit={props.onAdd}>        
                <input class="input is-primary" type="text" placeholder="Name"/>
                <input class="input is-info" type="text" placeholder="Number of calories"/>
                <input class="input is-success" type="text" placeholder="Image"/>
                <button type="submit">Submit</button>     
        </form>
    )
}

export default FoodForm;
