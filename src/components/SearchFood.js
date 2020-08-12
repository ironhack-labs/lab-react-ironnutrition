import React, { Component } from 'react';

//iteration 4 - search bar
class SearchFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: ''
      inputValue: ''
  }
  foodFilterOnChange = (event) => {
    this.setState({
      inputValue:  event.target.value
    })
  }
  return (
    <div>
      <label htmlFor="search">Search by name </label>
      <input type="text" value={props.inputValue} onChange={props.foodFilterOnChange}/>
    </div>
  )
}



export default SearchFood;