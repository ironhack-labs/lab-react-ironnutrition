import React, { Component } from "react";
import "bulma/css/bulma.css";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      quantity: 1,
      image: ""
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addTheFood(this.state);
    this.props.showForm(this.state);
    this.setState({
      name: "",
      calories: "",
      quantity: 1,
      image: ""
    });
  };

  changeHandler = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div className="field is-horizontal has-addons-centered">
          <form onSubmit={this.handleFormSubmit}>
            <div className="field is-horizontal">
              <label className="label">Name:</label>
              <div className="field is-horizontal">
                <div className="control">
                  <input
                    className="input is-info"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
              <label className="label">Calories:</label>
              <div className="field is-horizontal">
                <div className="control">
                  <input
                    className="input is-success"
                    type="text"
                    name="calories"
                    value={this.state.calories}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
              <label className="label">Quantity:</label>
              <div className="field is-horizontal">
                <div className="control">
                  <input
                    className="input is-info"
                    type="number"
                    name="quantity"
                    inputmode="numeric"
                    value={this.state.quantity}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
              <label className="label">Image:</label>
              <div className="field is-horizontal">
                <div className="control">
                  <input
                    className="input is-info"
                    type="text"
                    name="image"
                    value={this.state.image}
                    onChange={e => this.changeHandler(e)}
                  />
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddFood;
