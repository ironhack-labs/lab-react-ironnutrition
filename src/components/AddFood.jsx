import React, { Component } from 'react'

class AddFood extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                name: '',
                calories: '',
                image: "i.imgur.com/NMLpcKj.jpg",
                quantity: 0
            }
        }
    }

    handleNameInput = (event) => {
        this.setState({
            form: {name: event.target.value}
        })
    }

    handleCaloriesInput = (event) => {
        this.setState({
            form:{calories: event.target.value}
        })
    }

    handleImageInput = (event) => {
        this.setState({
            form: {image: event.target.value}
        })
    }

    handleQuantityInput = (event) => {
        this.setState({
            form:{quantity: event.target.value}
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state.form);
        this.props.toggleTheForm(this.state.form);      
        this.setState({ 
            form: {
                name: '',
                calories: '',
                image: '',
                quantity: ''
            } 
        })  
    }

   
    render(){
        return (
          <div>
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.form.name} onChange={(event) => this.handleNameInput(event)}/>
       
                <label>Calories:</label>
                <input type="number" name="calories" value={this.state.form.calories} onChange={(event) => this.handleCaloriesInput(event)}/>
       
                <label>Image:</label>
                <input type="text" name="image" checked={this.state.form.image} onChange={(event) => this.handleImageInput(event)}/>
                
                <input type="number" name="quantity" value={this.state.form.quantity} onChange={(event) => this.handleQuantityInput(event)}/>
                
                <input className="add-food-submit" type="submit" value="Submit" />
            </form>
          </div>
        )
      }
}

export default AddFood
