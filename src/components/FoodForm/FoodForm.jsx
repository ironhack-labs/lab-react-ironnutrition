import React, {Component} from "react";

const INITIAL_STATE = {
    name: '',
    specie: '',
    img:''
}

class FoodForm extends Component {

    state= {...INITIAL_STATE}

    handleOnChange = (event) =>{
        console.log(event)
        const {value, name} = event.target
        
        this.setState( { [name]: value }) // para hacer el key dinámico se debe de poner entre corchetes
    }

    onSubmit = (event) => {
        event.preventDefault()

        this.props.createFood(this.state)
        this.setState({...INITIAL_STATE})
        
    }

    render(){
        const { name, calories, image, servings } = this.state

        return (

            <form onSubmit={this.onSubmit}>
                <input
                name="name" id="name"
                value={name} onChange={this.handleOnChange}
                placeholder="Name of the food"
                required
                />
                <input
                name="calories" id="calories"
                value={calories} onChange={this.handleOnChange}
                placeholder="Number of Calories"
                />
                <input
                name="image" id="image"
                value={image} onChange={this.handleOnChange}
                placeholder="Image url of the food"
                />
                <input
                name="servings" id="servings"
                value={servings} onChange={this.handleOnChange}
                placeholder="Servings of the food"
                />
                <button>Submit</button>
            </form>

        )
    }


}

export default FoodForm