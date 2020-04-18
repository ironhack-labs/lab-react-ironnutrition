import React, { Component } from "react";

export default class ShowFood extends Component {
  state = {
    formVisible: false,
    totalCalories: 0,
  };

  handleSubmitQuantity = () => {
    this.setState({
      formVisible: true,
      totalCalories: this.state.calories + this.props.quantity,
    });
  };

  render() {
    const { formVisible, totalCalories } = this.state;
    const { name, quantity } = this.props;
    return (
      <div className="control">
        <button className="button is-info" onClick={this.handleSubmitQuantity}>
          +
        </button>
        {formVisible && (
          <div className="todaysFood-container ">
            <header className="todaysFood-head">
              <p className="todaysFood-title">Today's Food</p>

              <section class="todaysFood-body">
                <div>
                  <ul>
                    <li>Name: {name}</li>
                    <li>Quantity: {quantity} </li>
                  </ul>
                </div>
                <div>
                  <h1>Total: {totalCalories} Cal.</h1>
                </div>
              </section>
            </header>
          </div>
        )}
      </div>
    );
  }
}
