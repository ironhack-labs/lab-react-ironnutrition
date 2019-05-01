import React, { Component } from "react";

const initialState = {
  displayForm: false,
  name: "",
  calories: "",
  image: "",
  quantity: 0
};

export default class AddFood extends Component {
  state = { ...initialState };

  toggleForm(e) {
    e && e.preventDefault();
    this.setState({
      ...initialState,
      displayForm: !this.state.displayForm
    });
  }

  updateForm(e, key) {
    const newFood = { ...this.state };
    newFood[key] = e.target.value;
    this.setState(newFood);
  }

  submitNewFood(e) {
    e.preventDefault();
    this.setState(
      {
        ...this.state
      },
      () => {
        this.props.newFood(this.state);
        this.toggleForm();
      }
    );
  }

  render() {
    let formDisplay = this.state.displayForm ? "block" : "none";
    return (
      <React.Fragment>
        <button className="button is-fullwidth is-success" onClick={e => this.toggleForm(e)}>
          Add New
        </button>
        <form className="add-food-form" style={{ display: formDisplay }}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={e => this.updateForm(e, "name")}
                value={this.state.name}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="calories">Calories</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="calories"
                onChange={e => this.updateForm(e, "calories")}
                value={this.state.calories}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="image">Image</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="image"
                onChange={e => this.updateForm(e, "image")}
                value={this.state.image}
              />
            </div>
          </div>
          <div className="control">
            <button
              className="button is-primary is-fullwidth"
              onClick={e => this.submitNewFood(e)}
            >
              Add
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
