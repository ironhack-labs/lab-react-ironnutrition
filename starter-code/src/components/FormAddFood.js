import React, {Component} from "react"


class Form extends Component {

  constructor(props) {

      super(props)

      this.state = {
        name: '',
        calories: '',
        image: '',
        quantity: ''
          
      }
  }


handleChange = e =>{
  let {name, value} =e.target
  this.setState({[name]: value})
}

handleSubmit = e =>{
  e.preventDefault()
  this.props.addNewFood(this.state)
  this.setState({name: '', calories: '', image: '', quantity: ''})
}

  render() {
    
    return (

      <form onSubmit={this.handleSubmit}>
      <label>Name:
        <input type="text" name="name" value={this.state.name} onChange = {(e) => this.handleChange(e)}/>
      </label>
      <label>Calories:
        <input type="text" name="calories" value={this.state.calories} onChange = {(e) => this.handleChange(e)}/>
      </label>
      <label>Image:
        <input type="text" name="image" value={this.state.image} onChange = {(e) => this.handleChange(e)}/>
      </label>
<button>Add</button>
      </form>

    )}
}

export default Form