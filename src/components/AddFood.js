import React, { Component } from 'react';

class AddFood extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            calories: '',
            image: '',
            quantity: ''
        }
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.setState({     
          title: '',
          director: '',
          hasOscars: false,
          IMDbRating: ''
        })     
        this.props.addFood(this.state);
      }
      handleChange(event) {
        let { name, value } = event.target;
        this.setState({[name]: value});
      }

    render() {
        return (
            <div>
            {
            <form onSubmit ={(e)=>this.handleFormSubmit(e)}>
                <div className="control">
                    <input value = {this.state.name} name="name" type="text" placeholder="Name" onChange={(e) => this.handleChange(e)}></input>
                    <input value = {this.state.calories} name="calories" type="number" placeholder="Calories" onChange={(e) => this.handleChange(e)}></input>
                    <input value = {this.state.image} name="image" type="text" placeholder="Image URL" onChange={(e) => this.handleChange(e)}></input>
                    <button value = {this.state.calories} type="submit">Add Item</button>
                </div>
            </form>
        }
        </div>
        );
    }
}

export default AddFood;
