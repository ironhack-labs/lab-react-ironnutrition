import React, { Component } from "react";

class AddFoodForm extends Component {
    state = {
        "name": "",
        "calories": 0,
        "image": "",
        "quantity": 0
    }

    onChangeHandler = ( event ) => {
        const { name, value } = event.target;

        this.setState(
            {
                ...this.state,
                [name]: value
            }
        )
    };
 
    onSubmitHandler = ( event ) => {
        event.preventDefault();

        this.props.addFood(this.state);

        this.setState(
            {
                "name": "",
                "calories": 0,
                "image": "",
                "quantity": 0
            }
        )
    };

    render () {
        const { name, calories, image } = this.state;
        return (
            <div className="box">
                <form className="content" onSubmit={ this.onSubmitHandler }>
                    <label htmlFor="name">Name: </label>
                    <input className="input" type="text" name="name" onChange={ this.onChangeHandler } value={ name } />

                    <label htmlFor="">Calories: </label>
                    <input className="input" type="number" name="calories" onChange={ this.onChangeHandler } value={ calories } />

                    <label htmlFor="image">Image URL: </label>
                    <input className="input" type="text" name="image" onChange={ this.onChangeHandler } value={ image } />

                    <input className="button is-info" type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default AddFoodForm;