import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: '',
    calories: '',
    image: '',
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handle

  render() {
    const { name, calories, image} = this.state;
    return (
      <form>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" name="name" placeholder="Food name" value={name} onChange={this.handleInput} />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input className="input" type="text" name="calories" placeholder="Number of Calories" value={calories} onChange={this.handleInput} />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input className="input" type="text" name="image" placeholder="Image" value={image} onChange={this.handleInput} />
          </div>
        </div>
        <input className="button is-normal is-success" type="submit" value="Add Food" />
      </form>
    );
  }
}

export default Form;