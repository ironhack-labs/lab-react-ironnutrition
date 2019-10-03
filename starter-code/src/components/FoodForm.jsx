import React, { Component } from 'react'
import './FoodForm.css'

export default class FoodForm extends Component {
  constructor() {
    super()
    this.state={
      image: '',
      name: '',
      calories: 0
    }
  }

  sendState(e) {
    e.preventDefault();
    this.props.sendStateFromApp(this.state);
  }

  updateValue(e, field) {
    let newState = {...this.state}
    newState[field] = e.target.type === 'number' ? +e.target.value : e.target.value
    this.setState(newState)
  }

  render() {
    return (
      <form className='foodFormCard'>
        <label>Image URL</label>
        <input type="text" name="image" placeholder="http://..." value={this.state.image} onChange={e => this.updateValue(e, 'image')} />
        <label>Name</label>
        <input type="text" name="name" placeholder='Name of food' value={this.state.name} onChange={e => this.updateValue(e, 'name')} />
        <label>Calories</label>
        <input type="number" name="calories" value={this.state.calories} onChange={e => this.updateValue(e, 'calories')} />

        <button onClick={(e) => this.sendState(e)}>{this.props.children}</button>
      </form>
    )
  }
}
