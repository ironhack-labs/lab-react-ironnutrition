import { Component } from "react";

class NewFoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            calories: "",
            image: "",
            visible: false
        }
    }

    handleName = (e) => {
        const input = e.currentTarget
        const title = input.value
        this.setState({
            title: title
        })
    }

    handleChange = (e) => {
        let { name, value, type, checked } = e.currentTarget

        if (type === "checkbox") {
            value = checked
        }

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.addFood(this.state)
        //llamada al server (API)
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit} className="">

                <label>
                    Name: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                </label>

                <label>
                    Calories: <input onChange={this.handleChange} value={this.state.calories} type="text" name="calories" />
                </label>

                <label>
                    Image: <input onChange={this.handleChange} value={this.state.image} type="text" name="image" />
                </label>

                <input type="submit" value="Add Food" />
            </form>
        )
    }
}


export default NewFoodForm