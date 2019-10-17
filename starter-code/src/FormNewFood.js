import React, {Component} from 'react'

class FormNewFood extends Component {
  constructor (props){
    super(props);
    this.state = { 
      name: '',
      image: '',
      calories: '',
    }
    this.handleFoodInput = this.handleFoodInput.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFoodInput(event) {

    let { name, value } = event.target;
    
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit (event) {
    event.preventDefault();
    this.props.addTheFood(this.state);   
    this.setState({
      name: '',
      image: '',
      calories: '',
    })  
  }

  render(){
    return(
    <div >
      <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.props.name} onChange={(e) => this.handleFoodInput(e)}/>

          <label>Image:</label>
          <input type="text" name="image" value={this.props.image} onChange={(e) => this.handleFoodInput(e)} />

          <label>Calories:</label>
          <input type="text" name="calories" checked={this.props.calories} onChange={(e) => this.handleFoodInput(e)} />

          <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}

export default FormNewFood;