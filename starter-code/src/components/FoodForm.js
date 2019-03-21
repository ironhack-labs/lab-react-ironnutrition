import React, {Component} from 'react';


class FoodForm extends Component {

  constructor(props) {

    super(props)

    this.state = {
      image: '', 
      calories: '',
      name: ''
    }

  }


  handleChange = e => {
    let { name, value } = e.target;
    
    this.setState({[name]: value});
  }


  handleForSubmit = e => {
    e.preventDefault()
    this.props.addNewFood(this.state)
    this.setState({
      image: '', 
      calories: '',
      name: ''
    })
  }


  render () {

    return (
      <div className="form">
  
            <form onSubmit={this.handleForSubmit}>
          
              <label for="name">Name: </label>
              <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

              <label for="calories">Calories: </label>
              <input type="number" name="calories" value={this.state.calories}  onChange={(e) => this.handleChange(e)}/><br></br><br></br>

              <label for="image">Image: </label>
              <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)}></input>

              <button>On submit</button>
  
            </form>
   
      </div>
  )

  }
}




export default FoodForm


