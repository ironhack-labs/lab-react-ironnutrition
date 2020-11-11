import React, { Component } from 'react';

class AddFood extends Component {
    state = {
        name: '',
        calories: 1,
        image: '',
        button: false,
    }

     handleChange = event => {
        let { name, value } = event.target
        this.setState({ [name]: value})
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.addTheFood(this.state);
        this.setState({
            name: '',
            calories: 1,
            image: '',
            button: false,
        })
    }

    toggleButton = () => {
        this.setState({
            button: !this.state.button
        })
      }

        render() {
        return (
            <>
                 {!this.state.button ? 
                <button onClick={() => this.toggleButton()}>
                   "Add food" 
                </button>
                :
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                    
                    <label htmlFor="">Calories:</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>

                    <label htmlFor="">Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/>

                    <input type="submit" value="Submit"/>
                </form>
                }
            </>
        );
    }


}
export default AddFood;