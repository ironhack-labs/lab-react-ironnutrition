import React, { Component } from 'react';
import FoodBox from './FoodBox'

class AddFood extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            calories: 0,
            image: '',
            quantity: 0,
            isClicked: false
        };
    }

    showForm = () => {
        this.setState({isClicked: this.state.isClicked})
      }

    handleChange(event){
        let { name, value } = event.target;
        this.setState({ [name]: value});
        console.log(this.state)
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: 0,
            image: '',
            quantity: 0,
            isClicked: false
        })
    }


    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                    <label>Calories:</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />

                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} placeholder="Paste URL" onChange={(e) => this.handleChange(e)} />

                    {this.state.isClicked ?!<AddFood />:null}
                    <button onClick={this.showForm}  type="submit">Submit</button>
                </form>
            </div>
        )
    }
    
}

export default AddFood
