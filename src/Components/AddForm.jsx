import React, { Component } from 'react'

export class addForm extends Component {
    state = {
        name: "",
        calories: 0,
        image: "",
        quantity: 0,
        isVisible: false
    }

    displayMenu = () => {
        this.setState(
            this.state.isVisible ? {isVisible: false} : {isVisible: true}
        )
    }
    
    handleChange = (event) => {        
        const {value, name} = event.target
        this.setState({ [name]: value })
    }

    submitFood = (event) => {
        event.preventDefault();
        console.log("submitFood");
        this.props.addFood({
          name: this.state.name,
          calories: this.state.calories,
          image: this.state.image,
          quantity: this.state.quantity
        })
        console.log("Inside Form > ", this.state);
    }


    render() {
        const {name, quantity, calories, image} = this.state

        return (
          <div className="AddFood">
            <button onClick={this.displayMenu}> Add Pizza </button>

            {this.state.isVisible && 
              <form onSubmit={this.submitFood} >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.handleChange}
                  value={name}
                />

                <label htmlFor="calories">Calories</label>
                <input
                  type="number"
                  id="calories"
                  name="calories"
                  onChange={this.handleChange}
                  value={calories}
                />

                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  onChange={this.handleChange}
                  value={image}
                />

                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  onChange={this.handleChange}
                  value={quantity}
                />

                <button>Add</button>
              </form>
            }
          </div>
        );
    }
}

export default addForm
