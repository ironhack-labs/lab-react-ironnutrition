import React from 'react';
import 'bulma/css/bulma.css';

class AddFood extends React.Component {
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: '',
    isFormShown: false,
  };

  showForm = () => {
      this.setState ({
          isFormShown: true
      }
      )
  }


  nameChangeHandler = (event) => {
    let currentInputValue = event.target.value;

    this.setState({
      name: currentInputValue,
    });
  };

  caloriesChangeHandler = (event) => {
    let currentInputValue = event.target.value;

    this.setState({
      calories: currentInputValue,
    });
  };

  imageChangeHandler = (event) => {
    let currentInputValue = event.target.value;

    this.setState({
      image: currentInputValue,
    });
  };

  quantityChangeHandler = (event) => {
    let currentInputValue = event.target.value;

    this.setState({
      quantity: currentInputValue,
    });
  };

  formSubmitHandler = (event) => {
    // we stop the browser from its normal behaviour
    // which would be to generate GET request to backend
    event.preventDefault();

    let newFood = this.state;

    this.props.addFoodHandler(newFood); // TODO: pass the newly created movie

    // reset to initial (empty) state
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: '',
      isFormShown: false
    });

  };

  render() {
    return (
      <div>
        <button onClick={this.showForm}>Add Food</button>
        {this.state.isFormShown ? (
          <form onSubmit={this.formSubmitHandler}>
            Name:
            <input
              name="name"
              value={this.state.name}
              onChange={this.nameChangeHandler}
            ></input>
            Calories:
            <input
              name="calories"
              value={this.state.calories}
              onChange={this.caloriesChangeHandler}
            ></input>
            Image:
            <input
              name="image"
              value={this.state.image}
              onChange={this.imageChangeHandler}
            ></input>
            Quantity:
            <input
              name="quantity"
              value={this.state.quantity}
              onChange={this.quantityChangeHandler}
            ></input>
            <button type="submit">Save</button>
          </form>
        ) : (
          ''
        )}
      </div>
    );
  }
}
export default AddFood;
