import React, { Component } from "react";


class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            calories:"",
            image:"",
            quantity:""
        }
    }

    handleChange = (e) => {
        let { name, value } = e.currentTarget
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('la food es', this.state)
        this.props.addFood(this.state)
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>

                <label>
                    Name: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                </label>

                <label>
                    Calories: <input onChange={this.handleChange} value={this.state.calories} type="text" name="calories" />
                </label>

                {/* <label>
                    Img: <input onChange={this.handleChange} value={this.state.image} type="file" name="image" />
                </label> */}

                <input type="submit" value="Crear comida" />
            </form>
        )
    }
}


export default Form