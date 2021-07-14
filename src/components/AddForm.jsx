import React, { Component } from 'react'

//iteration 3: When a user clicks the button, a form will appear with fields for a name, number of calories, and an image.
class AddForm extends Component {
    render() {

        return (
            // for the iteration 3: it's necessary to set what will happen when the user clicks on the submit button. For this, we need to create an event on App.js (because the list of foods is coming from App.js) and pass as prop to FoodBox and then to here (because FoodBox is an App.js's child and this file (AddForm) is an FoodBox's child.).  
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
                <button class="button is-success">Submit</button>

            </form>      
        )
    }
}

export default AddForm;
