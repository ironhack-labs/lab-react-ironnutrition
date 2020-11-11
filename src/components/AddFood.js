import React, { Component } from 'react';

class AddFood extends Component {
    state = {
        name: '',
        calories: '',
        image: "https://i.imgur.com/hGraGyR.jpg",
        quantity: 0
    }

    // abstraemos los handlers de más arriba por uno sólo
    handleChange = event => {
        // desestructuramos el name y el value de event.target
        let { name, value } = event.target
        // comprobamos si el name coincide con "hasOscars" que es el input de tipo checkbox
        // usamos [] para configurar la key del objeto state con el value
        this.setState({ [name]: value})
    }

    handleFormSubmit = event => {
        // previene el comportamiento por default del formulario (recargar la página)
        event.preventDefault();
        // llamamos al método pasado desde DynamicMoviesList como prop y le pasamos el objeto del state con la nueva película
        this.props.addTheFood(this.state);
        // limpiamos los campos del formulario
        this.setState({
            name: '',
            calories: '',
            image: "https://i.imgur.com/hGraGyR.jpg",
            quantity: 0
        })
    }

    render() {
        return (
            <div>    
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name"  value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                    
                    <label htmlFor="">Number of calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>

                    <label htmlFor="">Url for the image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default AddFood;