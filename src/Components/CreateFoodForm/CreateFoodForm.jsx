import { Component } from "react";
import React from "react"

const intialState = {
    name: '',
    image: '',
    calories: '',
    quantity: '',
    errors: false
}




class CreateFoodForm extends Component {

    state = { ...intialState }

    onSubmit = (event) => {
        const { name, image, calories, quantity } = this.state
        event.preventDefault()

        if (name && image && calories && quantity && Number(calories) > 1 && Number(quantity) > 1) {
            this.props.onAddFood({
                name,
                image,
                calories: Number(calories),
                quantity: Number(quantity)
            })
            this.resetForm()
        } else {
            this.setState({ error: true })
        }
    }


    resetForm = () => {
        this.setState({ ...intialState })
    }

    onHandleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })

    }

    render() {
        const { name, image, calories, quantity } = this.state
        return (
            <form className="CreateFoodForm" onSubmit={this.onSubmit}>
                <div className="name">
                    <label className="label"
                        htmlFor="name"></label>
                    <div className="control">
                        <input className="input"
                            value={name}
                            onChange={this.onHandleChange}
                            type="text"
                            placeholder="Name of the Food"
                            name="name"
                            id="name" />
                    </div>
                </div>
                <div className="image">
                    <label className="label"
                        htmlFor="image"></label>
                    <div className="control">
                        <input className="input"
                            value={image}
                            onChange={this.onHandleChange}
                            type="text"
                            placeholder="Paste image URL"
                            name="image"
                            id="image" />
                    </div>
                </div>
                <div className="calories">
                    <label className="label"
                        htmlFor="calories"></label>
                    <div className="control">
                        <input className="input"
                            value={calories}
                            min={1}
                            onChange={this.onHandleChange}
                            type="number"
                            placeholder="Number of calories"
                            name="calories"
                            id="calories" />
                    </div>
                </div>
                <div className="calories">
                    <label className="label"
                        htmlFor="calories"></label>
                    <div className="control">
                        <input className="input"
                            value={quantity}
                            min={1}
                            onChange={this.onHandleChange}
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            id="quantity" />
                    </div>
                </div>
                <div className="field is-grouped mt-4 is-justify-content-center">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>


        )
    }


}





export default CreateFoodForm