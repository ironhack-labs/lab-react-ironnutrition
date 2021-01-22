import React from 'react';
import '../../App.css';
import 'bulma/css/bulma.css';

class AddFood extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            calories: '',
            quantity: 1,
            image: '',
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
     
      handleQuantityInput = (event) => {
        this.setState({
            quantity: event.target.value 
        })
      }
     
      handleImageInput = (event) => {
        this.setState({
            image: event.target.value
        })
      }

      handleFormSubmit = (event) => {
        event.preventDefault();

        this.props.AddFood(this.state)
      }

    render(){

        return(
            <div>
            <form onSubmit={this.handleFormSubmit}>
              <label>Name:</label>
              <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)}/>
     
              <label>Calories:</label>
              <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} />
     
              <label>Quantity:</label>
              <input type="text" name="quantity" checked={this.state.quantity} onChange={(e) => this.handleQuantityInput(e)} />
              
              <label>Image:</label>
              <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleImageInput(e)}/>
              
              <button>Submit</button>
            </form>
          </div>
        )
    }
}

export {AddFood}
