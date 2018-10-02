import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

class AddNewFoodForm extends Component {
  constructor(){
    super();
    this.state = {
        error: "",
        name: "",
        calories: 0,
        quantity: 0,
        image: "",
    }
  }

  handleSubmit(){
    let { name, calories, quantity, image } = this.state;
    if(name === '') return this.setState({error:'Empty name'});
    if(calories === '') return this.setState({error:'Empty calories'});
    if(image === 0) return this.setState({error:'Empty Image'});

    this.setState({error: '', name:'', calories: 0, quantity: 0, image: ''});

    this.props.foodReady({name, calories, quantity, image });
  }

  render() {

    let { name, calories, quantity, image, error} = this.state;
    return (
        <div>
            <p style={{color:"red"}}>{error}</p>
            <label>Food Name</label>
            <input type="text" value={name} onChange={(e) => this.setState({name:e.target.value})} />
            <label>Calories</label>
            <input type="text" value={calories} onChange={(e) => this.setState({calories:e.target.value})}/>
            <label>Image</label>
            <input type="text" value={image} onChange={(e) => this.setState({image:e.target.value})}/>
            <button onClick={this.handleSubmit.bind(this)}>Add Food</button>
        </div>
        )
    }
}

export default AddNewFoodForm;