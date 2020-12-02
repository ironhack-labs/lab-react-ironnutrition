import React, { Component } from 'react'
import './AddFood.css'

class AddFood extends Component {

    state={
        name: '',
        calories: undefined,
        quantity: undefined,
        image: '',
    }

    handleInput = (event) => {
        const {name, value} = event.target;
    
        this.setState({[name]: value})
      }


      handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {name: this.state.name,
          calories: this.state.calories, 
          quantity: this.state.quantity }
    

        this.props.createFood(newFood);
        this.props.handleForm();
        this.setState({showForm: false, 
          name:'', 
          calories:undefined, 
          quantity:undefined})
        
    
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="control">
                <label>Name</label>
                <input className="input is-small" type="text" name="name" onChange={this.handleInput} value={this.state.name}/>
                </div>
                <br/>
                <div className="field">
                <label>Image</label>
                <input type="text" className="input is-small" name="image" onChange={this.handleInput} value={this.state.image}/>
                <br />
                </div>
                <label>Calories</label>
                <input type="number" className="input is-small" name="calories" onChange={this.handleInput} value={this.state.calories}/>
                <br />
                <label>Quantity</label>
                <input type="number" className="input is-small" name="quantity" onChange={this.handleInput} value={this.state.quantity}/>
    
                <button className="submit-food button is-primary" >Submit</button>
              </form>
              
        )
    }
}

export default AddFood