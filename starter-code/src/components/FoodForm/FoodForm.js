import React, { Component } from 'react'


export default class FoodForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      calories: "",
      image: "",
    }
  }

  handleChange(e){
    this.setState({name:e.target.value})


  }
  handleChangeCalorie(e) {
    this.setState({calories: e.target.value});
  }
  handleChangeImage(e) {
    this.setState({image: e.target.value});
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={e=>this.props.addFoodArray(e,this.state)}>
            <label for="name">Name: </label>
            <input type="text"  placeholder="Food Name" onChange={e=>this.handleChange(e)}></input>
            <br></br>
            <label for="calories">Calories: </label>
            <input type="text"  placeholder="Food Calories" onChange={e =>this.handleChangeCalorie(e)}></input>
            <br></br>
            <label for="name">Image: </label>
            <input type="text" placeholder="Image" onChange={e =>this.handleChangeImage(e)}></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

