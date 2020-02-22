import React from 'react'
import foodInput from './FoodInput'

const FoodForm = props => {
    constructor(props) {
            super(props)
    }

    state = {

        name:"",
        calories:0,
        image: "",
        quantity:0
    }

    handleChange=() => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    createFood = () => {

    }

    return (
            <div>
                <foodInput
                    label="Nombre"
                    type="text"
                    name="name"
                    handleChange={this.handleChange}
                />
                <foodInput
                    label="Calories"
                    type="text"
                    name="calories"
                    handleChange={this.handleChange}
                />
                <foodInput
                    label="ruta Imagen"
                    type="text"
                    name="image"
                    handleChange={this.handleChange}
                />
                <foodInput
                    label="Cantidad Inicial"
                    type="text"
                    name="name"
                    handleChange={this.handleChange}
                />
                
    
            </div>
        )
}

export default FoodForm;