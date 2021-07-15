import React, { Component } from 'react'

class AddForm extends Component {
    
    render() {
        return (
            <form onSubmit={ this.props.onAddFood } noValidate autoComplete="off">
                <input id="standard-basic" label="Name" name="name" placeholder ="Name"/>
                <input id="standard-basic" label="Calories" name="calories" placeholder ="Calories"/>
                <input id="standard-basic" label="Image" name="image" placeholder ="Image"/>
               
                <button type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

export default AddForm