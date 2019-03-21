import React, { Component } from 'react'

export default class AddFood extends Component {

  constructor(props) {

    super(props)

    this.state = {
        name: '',
        calories: '',
        image: '',
        quantity: '',
        visible: false,
    }
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.addFood(this.state) // Recogemos del padre FoodList
    this.setState({
        name: '',
        calories: '',
        image: '',
        quantity: '',
        
    })
    this.toggleForm()
  }

  toggleForm = () => {
    if (this.state.visible === true){
    this.setState({
      visible : false     
    })
    }else{
    this.setState({
      visible : true     
    })
  }}

  render() {
    return (
      
      <div><button onClick={this.toggleForm}>Añadir nueva comida</button>
      {this.state.visible ? (
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} /><br></br><br></br>
           
          <label>Calories:</label>
          <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} /><br></br><br></br>
                     
          <label>Image:</label>
          <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} /><br></br><br></br>
          
          <label>Quantity:</label>
          <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)} /><br></br><br></br>
          
          <input type="submit" value="Submit"/>
        </form>)
        : null}

      </div>
    )
  }
}
