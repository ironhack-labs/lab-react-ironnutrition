import React from 'react';
import { Component } from 'react';

class AddFood extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: '',
      image: '',
    };
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmitForm(e) {
    e.preventDefault();
    const theFood = this.state;
    this.props.addFood(theFood);

    this.emptyForm();
  }

  emptyForm() {
    this.setState({ name: '', calories: '', image: '' });
  }

  render() {
    return (
      <>
        <h4>Crear  comida</h4>

        <form className="movie-form" onSubmit={(e) => this.handleSubmitForm(e)}>
          <label>
            Nombre
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            calories
            <input
              type="text"
              name="calories"
              value={this.state.calories}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Imagen
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>

          <input type="submit" value="Crear nuevo alimento"></input>
        </form>
      </>
    );
  }
}

export default AddFood
