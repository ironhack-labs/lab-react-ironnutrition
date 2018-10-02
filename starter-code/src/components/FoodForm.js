import React, { Component } from 'react';

export default class FoodForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      calories: Number,
      image: '',
      quantity: 1,
      error: '',
      formEnabled: false
    }
  }
  formSubmit(){
    let {name, calories, image, quantity} = this.state;
    if(name === '') return this.setState({error: 'Empty name'});
    if(calories == isNaN) return this.setState({error: 'Calories field must be a number'});
    this.setState({name: '', calories: Number, image: '', quantity: 1, formEnabled: false})
    return this.props.foodToAdd({name, calories, image, quantity});
  }

  toggleForm = () => {
    this.setState({formEnabled: true});
}
    
  render() {
    let {name, calories, image, error, formEnabled} = this.state;
    return (
      <div>
        <button onClick={this.toggleForm}>
          Add a Food
        </button>
        {formEnabled &&
          <div>
            <p style={{color:'red'}}>{error}</p>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => this.setState({name: e.target.value})}/>
            <label>Calories</label>
            <input type="number" value={calories} onChange={(e) => this.setState({calories: e.target.value})}/>
            <label>Image:</label>
            <input type="text" value={image} onChange={(e) => this.setState({image: e.target.value})}/>
            <button onClick={this.formSubmit.bind(this)}>Submit the new Food</button>
          </div>
        }
      </div>
    );
  }
}
