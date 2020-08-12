import React, { Component } from 'react';


class AddFood extends Component {
  constructor(props) {
    super(props)
    //los campos a rellenar
    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: ''
    }
  }

  //metodo para guardar los values introducidos en el form
  handleChange(event){
    let {name, value } = event.target;
    this.setState({[name]: value});
  }

  //metodo para guardar los values, subir los values.
  handleFormSubmit = event => {
    event.preventDefault(); //sale problema! TypeError: this.props.addTheFood is not a function
    this.props.addTheFood(this.state)
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>

          <label>Calories:</label>
          <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>

          <label>image:</label>
          <input type="file" name="image" checked={this.state.image} onChange={(e) => this.handleChange(e)}/>

          <label>quantity:</label>
          <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)}/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddFood;