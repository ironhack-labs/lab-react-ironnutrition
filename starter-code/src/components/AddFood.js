import React, { Component } from 'react';



class AddFood extends Component {

    constructor(props) {

        super(props)

        this.state = {
            name: '',
            calories: 0,
            image: '',
            cuantity: 0
        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        
        this.props.addTheFood(this.state)
        this.setState({ name: '', calories: 0, image: '', cuantity: 0 })
    }


    
    render() {
        return (

            <form onSubmit={this.handleFormSubmit}>
                <label>Nombre:
                <input type="text" name="Nombre" value={this.state.title} onChange={(e) => this.handleChange(e)} />
                </label>
                <br></br>

                <label>Calorias:
                <input type="number" name="Calorias" value={this.state.director} onChange={(e) => this.handleChange(e)} />
                </label>
                <br></br>

                <label>Imagen:
                <input type="text" name="Imagen" checked={this.state.hasOscars} onChange={(e) => this.handleChange(e)} />
                </label>
                <br></br>

                <label>Cantidad:
                <input type="number" name="Cantidad" value={this.state.IMDbRating} onChange={(e) => this.handleChange(e)} />
                </label>
                <br></br>

                <input type="submit" value="enviar" />
            </form>

        )
    }
}

export default AddFood