import React, { Component } from 'react'

export default class CreateNewFood extends Component {
  state = {
    name: '',
    image: '',
    calories: 0,
    quality: 0,
  }

  submit = e => {
    e.preventDefault()
    this.props.createNewFood(this.state)
    this.setState({
      name:'',
      image: '',
      calories: 0,
      quality: 0
    })
    
  }
  handleChange = e => {
    const { target: name, value } = e
    this.setState({
      [name] : value
    })
  }
  render() {
    return (
      <div>
        <form action="">
        <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
        <input onChange={this.handleChange} type="text" name="image" value={this.state.image}/>
        <input onChange={this.handleChange} type="text" name="calories" value={this.state.caliries}/>
        <input onChange={this.handleChange} type="text" name="quality" value={this.state.quality}/>
        <input onChange={this.handleChange} type="submit" value=""/>
      </div>
    )
  }
}

