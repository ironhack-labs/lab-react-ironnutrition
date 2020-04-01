import React, { Component } from "react";

class AddFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            name: "",
            quantity: '',
        };
    }


    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state);
        this.setState({
            image: "",
            name: "",
            quantity: '',
        })
    }

    handleChange = (event) => {
        let { name, value} = event.target;
        this.setState({ [name]: value })
    }
    
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={e => this.handleChange(e)}
                    />

                    <label>Image:</label>
                    <input
                        type='text'
                        name='image'
                        value= {this.state.image} alt=''
                        onChange={e => this.handleChange(e)}
                    />

                    <label>Quantity:</label>
                    <input
                        type='number'
                        name='quantity'
                        value={this.state.quantity}
                        onChange={e => this.handleChange(e)}
                    />

                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default AddFood;
