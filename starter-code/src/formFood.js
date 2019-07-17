import React, { Component } from "react";

export default class formFood extends Component {
  constructor() {
    super();

    this.state = {
      isHidden: true
    };
  }

  appearForm() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.appearForm()}>Create new Food</button>
        {!this.state.isHidden && (
          <form onSubmit={this.handleFormSubmit}>
            <fieldset>
              <input type="text" name="name" placeholder="name" />
              <input type="text" name="calories" placeholder="calories" />

              <input type="text" name="photo" placeholder="photo" value={this.state.title} />
            </fieldset>
            <button onClick={this.props.addFood}>Add Food</button>
          </form>
        )}
      </div>
    );
  }
}
