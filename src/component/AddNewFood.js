import React, { Component } from 'react';

 // cuando presiona el boton se abre el formulario
class AddNewFood extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      calories: '',
      image: '',
      quantity: '',
      formVisible : false

    }
 
    this.showForm = this.showForm.bind(this);

  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("HANDLE: ", this.props.addNewFood)
    this.props.addNewFood({name: this.state.name,calories: this.state.calories,image: this.state.image,quantity: this.state.quantity})
  }

 showForm(e){
  console.log("FORM VISIBLE: ", this.state.formVisible)
  this.setState({formVisible: !this.state.formVisible}); // flag
 }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleCalories = (event) => {
    this.setState({
      calories: event.target.value
    })
  }

  handleImage = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  handleQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }
  
 

  render() {
    console.log("FORM VISIBLE RENDER: ", this.state.formVisible)
    return (
      <div>
      <button onClick={this.showForm}>Add new</button>
      {this.state.formVisible ? (
      <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleName(e)} />
      
                <label>Calories:</label>
                <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCalories(e)} />
      
                <label>Image:</label>
                <input type="text"  name="image" checked={this.state.image} onChange={(e) => this.handleImage(e)} />
      
                <label>Quantity:</label>
                <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleQuantity(e)} />
                  
                <button type="submit">Submit</button>
              </form>) : null
      }
    </div>
    )
  }

}
export default AddNewFood;
