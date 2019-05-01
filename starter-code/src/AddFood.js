import React, { Component } from 'react'

export default class AddFood extends Component {
  constructor () {
    super()
    this.state = {
      name: "",
      calories: 0,
      image: "",
      quantity:0,
      open: true
    }

  }

  toggleForm(e){
    e.preventDefault();
    this.setState({
      ...this.state,
      open: !this.state.open
    })
  }

  changeFormData(e, key) {
    const newState = {...this.state}

    newState[key] = e.target.value

    this.setState(newState);
}

  addFood(e){
    e.preventDefault();
    this.props.add({name: this.state.name, calories: this.state.calories, image: this.state.image, quantity: this.state.quantity  });
  }

  render() {
    return (
      <div>
        <button onClick={(e)=>this.toggleForm(e)}>Add New Food</button>
        {(this.state.open) ? 
        <form>
          <label></label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.changeFormData(e, 'name')}></input>
          <label></label>
          <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.changeFormData(e, 'calories')}></input>
          <label></label>
          <input type="text" name="image" value={this.state.image} onChange={(e) => this.changeFormData(e, 'image')}></input>
          <button onClick={(e)=> this.addFood(e)}>Save Food</button>
        </form>
        : null
        }
      </div>
    )
  }
}
