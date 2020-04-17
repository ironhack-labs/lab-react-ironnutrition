import React, { Component } from "react";

class AddFood extends Component {
  state = {
    formState: "",
    name: "",
    calories: "",
    image: "",
  };

  renderForm = () => {
    this.setState({
      formState: this.state.formState === true ? false : true,
    });
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addToList = (e) => {
    const { click } = this.props;
    click(this.state);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="box">
          <div className="control">
            <button onClick={this.renderForm} className="button is-info">
              {!this.state.formState ? "Show form" : "Hide form"}
            </button>
          </div>

          {this.state.formState ? ( //conditionnal rendering of the form
            <div>
              <br />
              <label>Name</label>
              <input
                className="input"
                id="name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInput}
              />
              <br />
              <label>Calories</label>
              <input
                className="input"
                id="calories"
                type="number"
                name="calories"
                value={this.state.calories}
                onChange={this.handleInput}
              />
              <br />
              <label>Image</label>
              <input
                className="input"
                id="image"
                type="text"
                name="image"
                value={this.state.image}
                onChange={this.handleInput}
              />
              <br />
              <br />
              <div className="control">
                <button onClick={this.addToList} className="button is-info">
                  Add
                </button>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    );
  }
}

export default AddFood;
