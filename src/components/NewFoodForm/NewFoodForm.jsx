import React from 'react';

export default class NewFoodForm extends React.Component {
    state = {
            name: "",
            calories: "",
            image: "",
            quantity: 1,
    };

    handelInputs = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    createNewFood = (e) => {
        e.preventDefault()
        this.props.createNewFood({...this.state})
    }

    render() {

        return (
            <form onSubmit={this.createNewFood} style={{ width: '60vw'}}>

                <label className="label has-text-left" htmlFor="name">Name:</label>
                <input className="input" name="name" value={this.state.name} type="text" onChange={this.handelInputs}/>
    
                <label className="label has-text-left mt-3" htmlFor="calories">Calories:</label>
                <input className="input" name="calories" value={this.state.calories} type="text" onChange={this.handelInputs}/>
    
                <label className="label has-text-left mt-3" htmlFor="image">Image URL:</label>
                <input className="input" name="image" value={this.state.image} type="text" onChange={this.handelInputs}/>
    
                <button className="button is-info mb-5 mt-3" type="submit">Save</button>

            </form>
        );
    }
}
