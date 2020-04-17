import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: '',
    calories: '',
    image: '',
    quantity: '',
    form: true,
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  hideform = () => {
    this.setState({
      form: !this.state.form,
    })
  }

  handleClick = () => {
    const { name, calories, image, quantity } = this.state;
    const newFood = { name, calories, image, quantity };
    this.props.updateFoods(newFood);
    this.props.toggle();
  }

  render() {
    const { name, calories, image } = this.state;
    return (
      <div>
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
        <button onClick={this.handleClick} className="button is-normal is-success">Add Food</button>  
      </div> 
    );
  }
}

export default Form;