import React, { Component } from 'react';

class FoodForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            calories:0,
            image:'',
            quantity:0
        }
    }
    submitHandler =(e) => {
        e.preventDefault();
        this.props.hideForm();
        this.props.addNewFood(this.state);
    }
    inputHandler =(e) => {
        console.log(e.target);
        let{name,value} = e.target;
        this.setState({
            [name]:value
    
        })
    }
    render() {
        return (
            <form onSubmit={(e) => this.submitHandler(e)}>
                <label className="label">Name:</label>
                <input className="input" type="text" name='name' value={this.state.name} onChange={this.inputHandler}/>

                <label className="label">calories:</label>
                <input className="input" type="number" name='calories' value={this.state.calories} onChange={this.inputHandler}/>

                <label className="label">Image:</label>
                <input className="input" type="text" name='image'  value={this.state.image} onChange={this.inputHandler}/>

                <input className="button is-medium is-info" type="submit" value="Submit"/>
                
            </form>
        )
    }
}

export default FoodForm;