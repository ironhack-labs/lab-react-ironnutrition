import React,{Component} from 'react'

class AddFood extends Component {

  constructor(props) {
    
    super(props)

    this.state = {

      name: "",
      calories: "",
      image: "",
      quantity: 0
    
    }

  }


  handleChange = e => {
    let {name, value} = e.target
    
    this.setState({[name]: value})
  }


  handleFormSubmnit = e => {
    e.preventDefault()
    this.props.addFood(this.state)
    this.setState({
      name: "",
      calories: "",
      image: "",
      quantity: 0
    })
  }



  render(){


    return(

      <form onSubmit={(e) => this.handleFormSubmnit(e)}>    
        <label for="name">Name 
          <input type="text" name="name" placeholder="Food" value={this.state.name} onChange={(e) => this.handleChange(e)}/><br/><br/>
        </label>
        <label for="calories">Calories 
          <input type="text" name="calories" placeholder="Calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/><br/><br/>
        </label>
        <label for="image">Image 
          <input type="text" name="image" placeholder="Url image" value={this.state.image} onChange={(e) => this.handleChange(e)}/><br/><br/>
        </label>
        <button type="submit">Add Food</button>

      </form>



    )


  } 


}

export default AddFood

