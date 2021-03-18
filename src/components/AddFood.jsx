import React, { Component } from 'react';

export default class AddFood extends Component {
  state = {
    formVisible: false,
      name: '',
      image: '',
      calories: 0,
  };

  handleClick = () => {
    const visibility = this.state.formVisible;
    this.setState({ formVisible: !visibility });
  };

  handleChange = (e) => {
    const entry = e.target.name;
    const value = e.target.value;
    this.setState({ [entry]: value });
  };

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.add({
          name: this.state.name,
          image: this.state.image,
          calories: this.state.calories
      })
      this.setState({
        name: '',
        image: '',
        calories: 0
      })
      this.handleClick()
  }

  liftValue = () => {

  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add new food</button>
        {this.state.formVisible && (
          <form action="">
            <div>
              <label htmlFor="name">Name</label>
              <input
                onChange={this.handleChange}
                value={this.state.name}
                type="text"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="calories">Calories</label>
              <input
                onChange={this.handleChange}
                value={this.state.calories}
                type="number"
                name="calories"
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                onChange={this.handleChange}
                value={this.state.image}
                type="text"
                name="image"
              />
            </div>
            <button onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}
