import React, { Component } from 'react'

const validators = {
    name: (value) => {
        let message;
        if (!value) {
        message = "Name is required";
        } else if (value.length < 2) {
        message = "Invalid name";
        }

        return message;
    },
    calories: (value) => {
        let message;
        if (!value) {
        message = "Calories is required";
        }

        return message;
    },

    image: (value) => {
        let message;
        if (!value) {
        message = "Image is required";
        } else if (!value.includes("http")) {
            message = "Invalid image";
        }

        return message;
    }
}

export default class Form extends Component {

    state = {
        fields: {
            name: "",
            calories: "",
            image: ""
        },
        errors: {
            name: null,
            calories: null,
            image: null
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.isValid()){
            this.props.addFood(this.state.fields);
            this.setState({
                fields: {
                    name: "",
                    calories: "",
                    image: ""
                },
                errors: {
                    name: null,
                    calories: null,
                    image: null
                }
            })
        }
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

    isValid() {
        const { errors } = this.state;
        return !Object.keys(errors).some(key => errors[key]);
    }



    render() {

        const { fields, errors } = this.state;

        return (
            <form onSubmit={(e) => this.handleSubmit(e)} style={{ marginBottom: 50 }} >
                <div className="form-item">
                    <label htmlFor="name">Name: </label>
                    <input className={`${errors.name ? "error-input" : ""}`} placeholder="Name" type="text" name="name" value={fields.name} onChange={(e) => this.handleChange(e)} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="calories">Calories: </label>
                    <input placeholder="Calories" type="text" name="calories" value={fields.calories} onChange={(e) => this.handleChange(e)} />
                    {errors.calories && <p style={{ color: 'red' }}>{errors.calories}</p>}
                </div>
                <div className="form-item">
                    <label htmlFor="image">Image: </label>
                    <input placeholder="Image link" type="text" name="image" value={fields.image} onChange={(e) => this.handleChange(e)} />
                    {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
                </div>

                <button disabled={!this.isValid()} type="submit">Create food box</button>
            </form>
        )
    }
}
