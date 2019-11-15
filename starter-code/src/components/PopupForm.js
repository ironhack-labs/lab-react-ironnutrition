import React, { Component } from 'react';
import FormField from './formfieldbox';

export class PopupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      calories: 0,
      image: ''
    }
  }

  updateInput = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  closePopupSubmit = (e) => {
    e.preventDefault()
    let food = {     //1.gather food data from form submit
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
     } ;
     this.props.closePopup(food) //2.closePopup function in close button in app.js, add food data


  }

  render() {
    return (
      <div className='popup'>  
      <div className='popup-inner'>  
      <form onSubmit={this.closePopupSubmit} >
        <FormField onChange={this.updateInput} label="Name" type="text" name="name" value={this.state.name} />
        <FormField onChange={this.updateInput} label="Number of calories" type="number" name="calories" value={this.state.calories} />
        <FormField onChange={this.updateInput} label="Please add Image URL" type="text" name="image" value={this.state.image} />
        <button type="submit" className="button is-primary">Submit</button>
      </form>
      </div>  
      </div>  
    )
  }
}

export default PopupForm;
