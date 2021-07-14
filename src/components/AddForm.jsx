import React, { Component } from 'react'

class AddForm extends Component {
    render() {

        return (

            <form onSubmit={this.props.onAddNewFood} noValidate autoComplete="off">
                <div className="field">
                    <input className="input" type="text" name="name" placeholder="What is the name of the food?"/>
                </div> 
                <div className="field">
                    <input className="input" type="number" name="calories" placeholder="How many calories does it have?"/>
                </div> 
                <div className="field">
                    <input className="input" type="text" name="image" placeholder="What's the image url?"/>
                </div> 
                <button class="button is-warning">Submit</button>

            </form>      
        )
    }
}

export default AddForm;