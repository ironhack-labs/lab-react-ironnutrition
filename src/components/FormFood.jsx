import React, { Component } from 'react';

export class FormFood extends Component {
  state = {
    name: '',
    image: '',
    calories: '',
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addFood({
      name: this.state.name,
      image: this.state.image,
      calories: this.state.calories,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              id="name"
              ref={this.inputRef}
              type="text"
              name="name"
              className="input is-primary is-small is-rounded"
            />
          </div>
          <div>
            <label htmlFor="image">image</label>
            <input
              onChange={this.handleChange}
              value={this.state.image}
              id="image"
              type="text"
              name="image"
              className="input is-primary is-small is-rounded"
            />
          </div>
          <div>
            <label htmlFor="calories">Calories</label>
            <input
              onChange={this.handleChange}
              value={this.state.calories}
              id="calories"
              type="text"
              name="calories"
              className="input is-primary is-small is-rounded"
            />
          </div>
          <button class="button is-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormFood;
