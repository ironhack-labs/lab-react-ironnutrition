import React, { Component } from "react";
import App from './App.js'

class NewFood extends Component {
  constructor() {
    super();
    this.state = { //siempre fallo al definir las propiedades de state vacías, ¿por qué es necesario asignarles un string en lugar de sólo dejarlas por ejemplo como name, calories, image, sin dar ningún valor?
      name: "",
      calories: "",
      image: ""
    }
  }

  handleSubmit() {
    let { name, calories, image } = this.state;
    this.setState({name: '', calories: '', image: ''})
    this.handleAddFood({ name, calories, image }); //no consigo pasar la información a app.js para que pueda guardarla y mostrarla
  }

  render() {
    let { name, calories, image} = this.state;
    return (
      <div>
        <label for="name">Name</label>
        <input 
          name="name" 
          type="text" 
          value={name} 
          onChange={(e) => this.setState({ name: e.target.value})}/>
        <label for="calories">Calories</label>
        <input 
          name="calories" 
          type="number" 
          value={calories} 
          onChange={(e) => this.setState({ calories: e.target.value})}/>
        <label for="file">Image</label>
        <input 
          name="image" 
          type="file"
          onChange={(e) => this.setState({ image: e.target.value})} />
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default NewFood;
