import React from 'react';
import FormTextInput from './FormTextInput';
import foods from '../foods.json';

class Form extends React.Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   const data = this.state;

  //   newFoods.push(data);

  //   console.log(newFoods);

  //   foods = newFoods;

  //   alert('Uma comida foi adicionada: ' + this.state.name);
  // };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormTextInput
          label="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Food's name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <FormTextInput
          label="Calories"
          type="number"
          id="calories"
          name="calories"
          placeholder="Food's calories"
          onChange={this.handleChange}
          value={this.state.calories}
        />
        <FormTextInput
          label="Image"
          type="text"
          id="image"
          name="image"
          placeholder="Food's image"
          onChange={this.handleChange}
          value={this.state.image}
        />
        {/* <button class="button is-info m-5" type="submit">Submit</button> */}
        <input class="button is-info m-5" type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default Form;
