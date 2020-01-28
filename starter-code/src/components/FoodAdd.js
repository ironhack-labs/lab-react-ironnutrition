import React, { Component } from 'react'

/* element outof foods:
   ---------------------------------------------------------------
    "name": "Pizza",
    "calories": 400,
    "image": "https://i.imgur.com/eTmWoAN.png",
    "quantity": 0

*/

export default class FoodAdd extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            calories: 0,
            image: "",
            quantity: 0
        }
    }    

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addNewFoodToListHandler(this.state);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const type = event.target.type;
        let value = target.value;
        const name = target.name;

        if( type === "number") value = Math.floor( value ).toString();
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label><br/>
                    <input type = "text" name="name" value={this.state.name} onChange={this.handleInputChange}/><br />
                    <label>Calories:</label><br/>
                    <input type = "number" name="calories" value={this.state.calories} onChange={this.handleInputChange}/><br />
                    <label>Image:</label><br/>
                    <input type = "text" name="image" value={this.state.image} onChange={this.handleInputChange}/><br /><br />
                    <button className="button is-success" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
