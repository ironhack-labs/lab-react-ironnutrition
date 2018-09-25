import React, { Component } from 'react';


class FoodForm extends Component {

    state = {
        name: "",
        calories: "",
        image: "",
        quantity: 1
    };


    handleChange(event) {
        let { name, value } = event.target;

        this.setState({[name]: value});
    }

    render(){
        return (
            <div>
                <form onSubmit={(e) => this.props.addFood(e, { ...this.state}) }>
                    <div className="field">
                        <label className="label">Name:</label>
                        <input className="input" type="text" name="name" value={this.state.name} placeholder="Enter food's name" onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className="field">
                        <label className="label">Calories:</label>
                        <input className="input" type="text" name="calories" value={this.state.calories} placeholder="Enter calories quantity" onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className="field">
                        <label className="label">Image:</label>
                        <input className="input" type="text" name="image" value={this.state.image} placeholder="Enter image url" onChange={(e) => this.handleChange(e)} />
                    </div>
                    <button className="button is-success" type="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default FoodForm;