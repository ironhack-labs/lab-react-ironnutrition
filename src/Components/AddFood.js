import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';

class AddFood extends Component {

    state = {
        name: "",
        calories: "",
        quantity: ""
    }

    nameChangeHandler = (event) => {
        event.preventDefault()

        this.setState({
            name: event.target.value
        })
    }

    caloriesChangeHandler = (event) => {
        event.preventDefault()

        this.setState({
            calories: event.target.value
        })
    }

    quantityChangeHandler = (event) => {
        event.preventDefault()

        this.setState({
            quantity: event.target.value
        })
    }

    onSubmitHandler = (event) => {

        event.preventDefault()

        let newFood = this.state

        this.props.addFoodToListHandler(newFood)

        this.setState({
            name: "",
            calories: "",
            quantity: ""
        })

    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
        
        name:       <input name="Name" value={this.state.name} onChange={this.nameChangeHandler}></input>
        calories:   <input name="Calories" value={this.state.calories} onChange={this.caloriesChangeHandler}></input>
        quantity:   <input name="Quantity" value={this.state.quantity} onChange={this.quantityChangeHandler}></input>

          <button className="button" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default AddFood;
