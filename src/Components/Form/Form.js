import React, { Component } from 'react';

export default class Form extends Component {

    state = {
        fields: {
            name: "",
            calories: "",
            image: ""
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.addFood(this.state.fields);
        this.setState({
            fields: {
                name: "",
                calories: "",
                image: ""
            }
        })
        this.props.showForm()

    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            fields: {
            ...this.state.fields,
            [name]: value
            }
        });
    }

    toggleFormShow = () => {
        this.setState({ showForm: !this.state.showForm })
        }

    render() {

        const { fields } = this.state;

        return (
            <form onSubmit={(e) => this.handleSubmit(e)} style={{ marginBottom: 50 }} >
                <div className="form-item">
                    <label htmlFor="name">Name: </label>
                    <input placeholder="Name" type="text" name="name" value={fields.name} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-item">
                    <label htmlFor="calories">Calories: </label>
                    <input placeholder="Calories" type="text" name="calories" value={fields.calories} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-item">
                    <label htmlFor="image">Image: </label>
                    <input placeholder="Image link" type="text" name="image" value={fields.image} onChange={(e) => this.handleChange(e)} />
                </div>

                <button type="submit">Create food box</button>
            </form>
        )
    }
}


