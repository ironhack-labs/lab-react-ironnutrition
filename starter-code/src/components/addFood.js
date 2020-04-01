import React from 'react';

class AddFood extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            calories: '',
            quantity: '',
            image: ""
        }
    }
        handleNameInput = (event) => {
            this.setState({
              name: event.target.value
            })
          }
        
          handleCaloriesInput = (event) => {
            this.setState({
              calories: event.target.value
            })
          }
        
          handleQuantityCheck = (event) => {
            this.setState({
              quantity: event.target.value
            })
          }
        
          handleRating = (event) => {
            this.setState({
              image: event.target.value
            })
          }
          handleFormSubmit = (event) => {
            event.preventDefault();
            this.props.addTheFood(this.state);   
            this.setState({
              name: '',
              calories: '',
              quantity: false,
              image:''
            })  
          }

    render() {
        return (
            <div>
             <form onSubmit={this.handleFormSubmit}>
            <label>name:</label>
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)} />

            <label>calories:</label>
            <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} />

            <label>Quantity</label>
            <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleQuantityCheck(e)} />

            <label>Image</label>
            <input type="url" name="image" value={this.state.image} onChange={(e) => this.handleImage(e)} />
            
            <input type="submit" value="Submit" />
        </form>
          </div>
        )
    }
}

export default AddFood;