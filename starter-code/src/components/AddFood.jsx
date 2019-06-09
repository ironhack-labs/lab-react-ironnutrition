import React, { Component } from 'react';

class AddFood extends Component {
    constructor(props){
        super(props);
        
        this.state = { 
          name: '',
          calories: '',
          image: '',
          addFood: false,
        }

    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state);
        this.setState({
            name: '',
            calories: '',
            image: '',
            addFood: false,
        })  
    }

    changeAddFood = () => {
        this.setState({ addFood: true });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />

                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />
                    
                    <input type="submit" onClick={this.changeAddFood} value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddFood;