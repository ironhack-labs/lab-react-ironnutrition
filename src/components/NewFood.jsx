import React, { Component } from 'react';

export class NewFood extends Component {
  state = {
    visibility: false,
    name: '',
    image: '',
    calories: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = () => {
    if (!this.state.visibility) {
      this.setState({ visibility: true });
    } else {
      this.setState({ visibility: false });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewFoodFromParent({
      name: this.state.name,
      image: this.state.image,
      calories: this.state.calories,
    });
    this.setState({ visibility: false, name: '', image: '', calories: '' });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add food</button>
        {!this.state.visibility ? null : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name</label>
              <input onChange={this.handleChange} name="name" type="text" />
            </div>
            <div>
              <label>Calories</label>
              <input onChange={this.handleChange} name="calories" type="text" />
            </div>
            <div>
              <label>Image</label>
              <input onChange={this.handleChange} name="image" type="text" />
            </div>
            <button>Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default NewFood;
