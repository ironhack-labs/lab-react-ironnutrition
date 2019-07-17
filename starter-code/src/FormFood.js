import React from "react";
import "./FormFood.css";

export default class FormFood extends React.Component {
  constructor() {
    super();

    this.state = {
      food: {
        name: "",
        calories: undefined,
        image: "",
        quantity: 1
      },
      shouldHide: true
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     ...this.state,
  //     food: {
  //       ...this.state.food,
  //       name: this.props.initialName
  //     }
  //   });
  // }

  handleFormChange(e, field) {
    let newState = { ...this.state };
    newState.food[field] = e.target.value;
    this.setState(newState);
  }

  submitForm(e) {
    e.preventDefault();
    let newState = { ...this.state };
    newState.shouldHide = true;
    this.setState(newState);

    this.props.addNewFoodHandler(this.state.food);
  }

  OpenAddNewFoodMenu(e) {
    e.preventDefault();
    let newState = { ...this.state };
    newState.shouldHide = false;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <button
          className="button-menu"
          onClick={e => this.OpenAddNewFoodMenu(e)}
        >
          Add New Food
        </button>

        <form className={this.state.shouldHide ? "hidden" : "form-food"}>
          <h1 className="title-form">New food</h1>
          <fieldset>
            <input
              type="text"
              placeholder="please write the name of the food"
              defaultValue={this.state.food.name}
              onChange={e => this.handleFormChange(e, "name")}
            />
            <input
              type="text"
              placeholder="please write the number of calories"
              defaultValue={this.state.food.calories}
              onChange={e => this.handleFormChange(e, "calories")}
            />
            <input
              type="text"
              placeholder="please write the url of a picture for the food"
              defaultValue={this.state.food.image}
              onChange={e => this.handleFormChange(e, "image")}
            />
            <input
              type="hidden"
              defaultValue={this.state.food.quantity}
              onChange={e => this.handleFormChange(e, "quantity")}
            />
          </fieldset>
          <button onClick={e => this.submitForm(e)}>Submit</button>
        </form>
      </div>
    );
  }
}
