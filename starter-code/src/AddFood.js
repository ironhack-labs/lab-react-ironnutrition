import React, { Component } from 'react';


class AddFood extends Component {

    state = {
        form: {
            name: '',
            calories: '',
            image: ''
        },
        showForm: false
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addFood(this.state.form);
        this.setState({ 
            form: { name: '',
                    calories: '',
                    image: ''},
            showForm: false
        })
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ form: {[name]: value }});
    }

    openForm = () => {
        this.setState({ showForm: true});
    }

    render() {

        return (this.state.showForm) ? (
            <div>
                <form  className="form" onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        ) : (
        <div>
            <button className="form" onClick={this.openForm}>Add Food</button>
        </div> )
    }

}

export default AddFood;