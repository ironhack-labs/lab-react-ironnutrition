import React from "react";
import { Component } from "react";
import faker, { image } from 'faker'
import './FormFood.css'

const validations = {
    name: (value) => {
        let message;
        if (!value) {
            message = 'Name is requerid'
        }
        return message
    },
    calories: (value) => {
        let message;
        if (!value) {
            message = 'Calories is necessary!'
        }
        return message
    },
    quantity: (value) => {
        let message;
        if (!value) {
            message = 'We need to know how many you wants!'
        }
        return message
    }
}

class FormFood extends Component {

    state = {
        food: {
            name: '',
            image: faker.image.food(),
            calories: '',
            quantity: 0
        },
        errors: {
            name: validations.name(''),
            calories: validations.calories(''),
            quantity: validations.quantity('')
        }
    }

    handleChange(event) {
        const inputValue = event.target.value
        const inputName = event.target.name
        this.setState((prevState) => ({
            food: {
                ...prevState.food,
                [inputName]: inputValue
            },
            errors: {
                ...prevState.errors,
                [inputName]: validations[inputName] ? validations[inputName](inputValue) : undefined
            }
        }))
    }
    
    isFormValid() {
        const { errors } = this.state
        return !Object.keys((errors).some(key => errors[key] !== undefined))
    }

    handleSubmit(event) {
        event.preventDefault()

        const {food} = this.state

        this.props.onCreateFood(food)
        this.props.changeVisibility()
    }


    render() {
        const { food, errors } = this.state

        return (
            <div className='d-flex form mt-5 ' style={{ width: '50%' }} >
                    <img src={food.image} alt={food.name}/>
                    <form onSubmit={(event) => this.handleSubmit(event)} className="ms-4" >
                        <div className="input-group mb-1">
                            <span className="input-group-text"><i className="fa fa-user fa-fw" /></span>
                            <input name="name" type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="name's food " value={food.name}
                                onChange={(event) => { this.handleChange(event) }}/>
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>

                        <div className="input-group mb-1">
                            <span className="input-group-text"><i className="fa fa-cookie-bite fa-fw" /></span>
                            <input name="calories" type="text" className={`form-control ${errors.calories ? 'is-invalid' : ''}`} placeholder="calories's food " value={food.calories}
                                onChange={(event) => { this.handleChange(event) }} />
                            {errors.name && <div className="invalid-feedback">{errors.calories}</div>}
                        </div>

                        <div className="input-group mb-1">
                            <span className="input-group-text"><i className="fa fa-phone fa-fw" /></span>
                            <input name="quantity" type="number" className={`form-control ${errors.quantity ? 'is-invalid' : ''}`} placeholder="quantity's food " value={food.quantity}
                                onChange={(event) => { this.handleChange(event) }} />
                            {errors.quantity && <div className="invalid-feedback">{errors.quantity}</div>}
                        </div>

                        <div className="input-group mb-1">
                            <span className="input-group-text"><i className="fa fa-picture-o fa-fw" /></span>
                            <input name="image" type="text" className={`form-control ${errors.image ? 'is-invalid' : ''}`} placeholder="Image url..." value={food.image}
                                onChange={(event) => this.handleInputChange(event)} />
                            {/* <button className="btn btn-outline-secondary" type="button" onClick={() => this.handleRandomimageClick()}><i className="fa fa-refresh fa-fw" /></button> */}
                            {errors.image && <div className="invalid-feedback">{errors.image}</div>}
                        </div>

                        <div className="d-flex justify-content-end mt-2">
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                    </form>
            </div>
        )
    }
}

FormFood.defaultProps = {
    onCreateFood: () => {}
}
export default FormFood