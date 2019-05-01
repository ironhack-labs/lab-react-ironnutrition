import React, { Component } from 'react'
import './MyForm.css';

export default class MyForm extends Component {
  constructor(){
    super()
    this.state={
      name: null,
      calories: null,
      image: null
    }
  }

  handlerBotton = (e) => {
    e.preventDefault()
    let food = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    }
    this.props.info(food);
    this.setState({name:null,calories:null,image:null})
  }

  handlerState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form action="submit" onSubmit={(e) => this.handlerBotton(e)}>
        <input type="text" name="name" id="" onChange={e => this.handlerState(e)}/>
        <input type="number" name="calories" id="" onChange={e => this.handlerState(e)}/>
        <input type="text" name="image" id="" onChange={e => this.handlerState(e)}/>
        <input type="submit" value="ADD"/>
        </form>
      </div>
    )
  }
}
