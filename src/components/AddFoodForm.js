import React, { Component } from 'react';

class AddFoodForm extends Component {
  /* 9. PASOS: Definir el estado inicial del formulario (vacío) */
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: 0,
  };

  /* 10. PASOS: Renderizar el formulario y unir el onSubmit y el onChange donde corresponde */
  /* 11. PASOS: Definir las funciones handleSubmit() y handleChange()*/
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFood(this.state);
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: 0,
    });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={(e) => this.handleChange(e)}
          />
        </label>

        <label>
          Calories:{' '}
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={(e) => this.handleChange(e)}
          />
        </label>

        <label>
          Image:{' '}
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={(e) => this.handleChange(e)}
          />
        </label>

        <input type="submit" value="Add food" />
      </form>
    );
  }
}

export default AddFoodForm;
