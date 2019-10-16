import React, {Component} from 'react'

class FoodForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      name : '',
      image: '',
      quantity: '',
    }
    this.handleFood = this.handleFood.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

handleFood(event){
  let {name, value} = event.target;
  this.setState({
    [name]: value,
  })
}

handleFormSubmit(event){
  event.preventDefault();
  this.props.addFood(this.state);   
  this.setState({
    name : '',
    image: '',
    quantity: '',
  }) 
} 


render(){
  return (
    <div>
      <form onSubmit={this.handleFormSubmit}>
          <label>name:</label>
          <input type="text" name="name" value={this.props.name} onChange= {(e) => this.handleFood(e)} />

          <label>image:</label>
          <input type="text" name="image" value={this.props.image}onChange= {(e) => this.handleFood(e)} />

          <label>quantity:</label>
          <input type="text" name="quantity" checked={this.props.quantity} onChange= {(e) => this.handleFood(e)} />

          <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

}


export default FoodForm;