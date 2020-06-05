import React, { Component } from 'react';
import 'bulma/css/bulma.css';


class AddFood extends Component {

    state = {
        name: "",
        calories: 0,
    }

    nameChangeHandler = (event) => {
        let currentInputValue = event.target.value
        this.setState({
            name : currentInputValue
        })

    }

    caloriesChangehandler = (event) => {
        let currentInputValue = event.target.value
        this.setState({
            calories : currentInputValue
        })

    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        let newFood = this.state

        this.props.addFoodHandler(newFood)
        this.setState({
            name: "",
            calories: 0
        })
    }


    render() {
      return (
        <div>
            <form onSubmit={this.formSubmitHandler}>
                <input type="text" name="name" value={this.state.name} onChange={this.nameChangeHandler}></input>
                <input type="number" name="calories" value={this.state.calories} onChange={this.caloriesChangehandler}></input>
                <button type="submit">Add new food</button>
            </form>
      </div>
      )
    }
  
  }
  
  
  export default AddFood;