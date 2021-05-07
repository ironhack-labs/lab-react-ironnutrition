import React, { Component } from 'react';

const validators = {
    name: (value) => {
        let message;
        if (!value) {
            message = "Name is required";
        } else if (value.length < 2) {
            message = "Invalid food";
        }
        return message;
    },

    calories: (value) => {
        let message;
        if (!value) {
            message = "Calories are required";
        };
        return message;
    },

    image: (value) => {
        let message;
        return message;
    }
}

class FoodForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: '',
                calories: '',
                image: '',
            },
            errors: {}
        }
        this.reset();
    }

    reset() {
        this.setState({
            fields: {
                name: '',
                calories: '',
                image: '',
            },
            errors: {}
        })
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            fields: {
                ...this.state.fields,
                [name]: value
            },
            errors: {
                ...this.state.errors,
                [name]: validators[name](value)
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addFood(this.state.fields);
        this.reset();
    }

    render() {
        const { name, calories, image } = this.state.fields;
        return (
            <form
                className="newFoodForm"
                onSubmit={(e) => this.handleSubmit(e)}
            >
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input" type="text" name="name" value={name} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="field">
                    <label className="label">Calories</label>
                    <input className="input" type="number" name="calories" value={calories} onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <div className="field">
                    <label className="label">Image url</label>
                    <input className="input" type="text" name="image" value={image} onChange={(e) => this.handleChange(e)} />
                </div>
                <button type="submit">Create</button>
            </form>
        );
    }
}

export default FoodForm;