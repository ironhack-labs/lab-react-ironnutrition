import React, { Component } from 'react';

import 'bulma/css/bulma.css';

class AddFood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            calories: "",
            image: "",
            id: String(Math.random())

        };
    }
    nameChangeHandler = (event) => {
        let currentInputValue = event.target.value

        this.setState({
            name: currentInputValue
        })
    }


    caloriesChangeHandler = (event) => {
        let currentInputValue = event.target.value

        this.setState({
            calories: currentInputValue
        })
    }

    imageChangeHandler = (event) => {
        let currentInputValue = event.target.value

        this.setState({
            image: currentInputValue
        })
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
    
        let newFood = this.state
        this.props.addFoodHandler(newFood)

        //set the state back to empty form
        this.setState({
            name: "",
            calories: "",
            image: "",
            id: String(Math.random()) 
          })
    }

    render() {
        return (
          <div class="field">
            <form onSubmit={this.formSubmitHandler}>
            <label for="name">Name:</label>
            <input class="input is-primary" name="name" value={this.state.name} onChange={this.nameChangeHandler}></input>
            <label for="calories">Calories:</label>
            <input class="input is-primary" name="calories" value={this.state.calories} onChange={this.caloriesChangeHandler}></input>
            <label for="image">Image:</label>
            <input class="input is-primary" name="image" value={this.state.image} onChange={this.imageChangeHandler}></input>
              <button class="button" type="submit">Save</button>
            </form>
          </div>
        )
      }
}
export default AddFood;

