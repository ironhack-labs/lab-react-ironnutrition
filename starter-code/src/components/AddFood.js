import React,{Component} from 'react'
import addFood from '../App'

export default class AddFood extends Component {
state={
  name:"",
  calories:Number,
  image:"",
  quantity:Number
}
handleChange = (el) =>{
  const{name,value} = el.target
  this.setState({
    [name]:value
  })
}

handleFormSubmit = (el) =>{
  el.preventDefault();
  this.props.addFood(this.state)
  this.setState({
    name:"",
    calories:"",
    image:"",
    quantity:""
  })
}

handleSearch = (el) =>{
  el.preventDefault();
  this.searchFood(this.state)
  this.setState({
    name:"",
    calories:"",
    image:"",
    quantity:""
  })
}

  render() {
    return (
      <div>
        <form onSubmit ={this.handleFormSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange = {this.handleChange}/>
        <label>Calories</label>
        <input type="number" name="calories" value={this.state.calories} onChange = {this.handleChange}/>
        <label>Image</label>
        <input type="text" name="image" value={this.state.image} onChange = {this.handleChange}/>
        <label>Quantity</label>
        <input type="number" name="quantity" value={this.state.quantity} onChange = {this.handleChange}/>
        <input type="submit" value="Submit"/>

        </form>
      </div>
    )
  }
}
