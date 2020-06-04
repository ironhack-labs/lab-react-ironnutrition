import React from 'react';



class AddFood extends React.Component {

  state = {
    name: "",
    calories: "",
    image:""
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

  formSubmitHandler = (event) => {
    // we stop the browser from its normal behaviour 
    // which would be to generate GET request to backend
    event.preventDefault()

    let newFood = this.state

    // we need to pass an object that looks like { name: "askldjhasd", calories: "alkdhlkashj" }
    this.props.addFoodHandler(newFood) // TODO: pass the newly created movie

    // reset to initial (empty) state
    this.setState({
      name: "",
      calories: "",
      image: ""
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          Name: <input name="name" value={this.state.name} onChange={this.nameChangeHandler}></input>
        Calories: <input name="calories" type="number" value={this.state.calories} onChange={this.caloriesChangeHandler}></input>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }

}


export default AddFood;