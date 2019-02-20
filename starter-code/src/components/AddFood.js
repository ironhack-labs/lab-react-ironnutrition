import React, { Component } from 'react'

// export default class AddFood extends Component {
//   render() {
//     return (
//       <form onSubmit={this.addNew}>
//         <input type="text" onChange={this.handleName}></input>
//         <button>Enviar</button>
//       </form>
//     )
//   }
// }

export default class AddFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      calories: '',
      image: ''
    }
  }


  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleCalories = (e) => {
    this.setState({
      calories: e.target.value
    })
  }

  handleImage = (e) => {
    this.setState({
      image: e.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.addFoodProps(this.state)
    this.setState = {
      name: '',
      calories: '',
      image: ''
    }
  }

  render() {
    return (
      <div>
        <form className="show" onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleName} />

          <label>Calories</label>
          <input type="text" name="calories" value={this.state.calories} onChange={this.handleCalories} />

          <label>Image</label>
          <input type="text" name="image" value={this.state.image} onChange={this.handleImage} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
