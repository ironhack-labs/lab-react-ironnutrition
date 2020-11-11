import React, { Component } from 'react';

class AddNewFood extends Component {
  state = {
    image: '',
    name: '',
    calories: '',
    showForm: false,
  };

  handleChange = (event) => {
    // desestructuramos el name y el value de event.target
    let { name, value } = event.target;
    // usamos [] para configurar la key del objeto state con el value
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    // previene el comportamiento por default del formulario (recargar la página)
    event.preventDefault();
    // llamamos al método pasado desde DynamicMoviesList como prop y le pasamos el objeto del state con la nueva película
    //Cuando hacemos referencia a un método de una clase siempre ponemos "this"
    this.props.addTheMeal(this.state);
    // limpiamos los campos del formulario
    this.setState({
      image: '',
      name: '',
      calories: 0,
      showForm: false,
    });
  };

  showThisForm = () => {
    this.setState({
        showForm: !this.state.showForm
    })
}

  render() {
    return (
      <>
        {!this.state.showForm ? 
          <button onClick={() => this.showThisForm()}>"Add New Food"</button>
         : (
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="img">Image:</label>
            <input
              type="text"
              name="image"
              id="image"
              value={this.state.image}
              onChange={(e) => this.handleChange(e)}
            />

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />

            <label htmlFor="calories">Calories:</label>
            <input
              type="number"
              name="calories"
              value={this.state.calories}
              onChange={(e) => this.handleChange(e)}
            />

            <input type="submit" value="Submit" />
          </form>
        )}
      </>
    );
  }
}

export default AddNewFood;
