import React, { Component } from 'react';

class AddNewFood extends Component {
  state = {
    name: "",
    calories: "",
    image: ""
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({[name]: value})
  }

  handleSubmit = e => {
    e.preventDefault();

    // creamos un objeto newFood que contiene el state
    const newFood = this.state;
    // invocamos la función creada en FoodList.js pasándole el objeto comida que se acaba de crear
    this.props.addFood(newFood);
    
    // vacíamos el formulario
    this.setState({
      name: "", 
      calories: "",
      image: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
       
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input 
                className="input" 
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <label className="label">Calories</label>
            <div className="control">
              <input 
                className="input" 
                type="number" 
                name="calories" 
                value={this.state.calories} 
                onChange={this.handleChange} />
            </div>
          </div>
      
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input 
                className="input"
                type="text" 
                name="image" 
                value={this.state.image} 
                onChange={this.handleChange} />
            </div>
          </div>

          <div className="control">
            <button type="submit" className="button is-link">
                Submit new food
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddNewFood;