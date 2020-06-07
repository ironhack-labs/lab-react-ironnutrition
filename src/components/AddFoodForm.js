import React, { Component } from 'react';

class AddFoodForm extends Component{

    state = {
        name: '',
        calories: '',
        image: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.addFood(this.state);
        this.props.closeForm();

        //clean state
        this.setState({
            name: '',
            calories: '',
            image: ''
        });
    };

    render() {
        return (
            <div className="field">
                <form onSubmit={this.handleFormSubmit}>
                    <label className="label">Name:</label>
                    <div className="control">
                        <input className="input" type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                    </div>
                    <label className="label">Calories:</label>
                    <div className="control">
                        <input className="input" type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
                    </div>
                    <label className="label">Image:</label>
                    <div className="control">
                        <input className="input" type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className="form-buttons">
                        <button className="button is-link is-light" type="submit">Submit</button>
                        <button className="button is-danger is-light" onClick={() => this.props.closeForm()}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddFoodForm;