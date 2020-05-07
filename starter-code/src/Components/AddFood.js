import React, { Component } from 'react'

class AddFood extends Component {
 state =  {
  name: "",
  calories: "",
  image: "",
 }

 handleFoodAdd = ({target: {name, value}}) => {
  this.setState({
   [name] : value,
  })
 }

 handleFormSubmit = (e) => {
  e.preventDefault() //Este Metodo hace que no se recargue la pagina por default
  this.props.addFood(this.state);
 }
 render() {
  return (
   <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleFoodAdd}
          />

          <label>Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleFoodAdd}
          />

          <label>Upload your Image </label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleFoodAdd}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
  )
 }
}

export default AddFood