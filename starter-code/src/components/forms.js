import React, { Component } from 'react';

class FoodForm extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        name: '',
        calories: 0,
        image: '',
        quantity: 0,
      };
    };

    handlerSubmit = (newFood) => {

      newFood.preventDefault();

      this.props.addFood(this.state);

      this.setState({
        name: '',
        calories: 0,
        image: '',
        quantity: 0
      })
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]:value,
        })
    }

    render(){
        return(
            <form onSubmit={this.handlerSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}/>

                <label>Calories:</label>
                <input type="number" name="calories" value={this.state.calories} onChange={e => this.handleChange(e)}/>

                <label>Image:</label>
                <input type="text" name="image" value={this.state.image} onChange={e => this.handleChange(e)}/>
                
                <label>Quantity</label>
                <input type="number" name="quantity" value={this.state.quantity} onChange={e => this.handleChange(e)}/>
                
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default FoodForm;