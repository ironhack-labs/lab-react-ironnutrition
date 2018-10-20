import React, { Component } from "react";
import "bulma/css/bulma.css";

class FoodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayForm: false,
      name: "",
      calories: 0,
      image: "",
      quantity: 0
    };
  }

  newFood(e) {
    e.preventDefault()
    this.props.handleNewFoodInApp(this.state)
    this.setState({displayForm: false})
  }

  handleChange(event) {
    let { name, value } = event.target;
    if (name === "calories" || name === "quantity") {
      value = parseInt(value);
    }
    this.setState({ [name]: value });
  }

  render() {
    if (this.state.displayForm) {
      return (
        <form className="form">
          <div className="box">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g lasagnes"
                  name="name"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Calories</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. 500"
                  name="calories"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Image URL</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. https://xxxx.png"
                  name="image"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Quantity</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. 1"
                  name="quantity"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="control">
              <button className="button is-primary" onClick={(e) => this.newFood(e)}> Valider </button>
            </div>
          </div>

        </form>
      );
    } else {
      return (
        <div className="control">
         <button className="button is-primary" onClick={() => this.setState({ displayForm: true })}> Ajouter un plat </button>
        </div>
      );
    }
  }
}

export default FoodForm;
