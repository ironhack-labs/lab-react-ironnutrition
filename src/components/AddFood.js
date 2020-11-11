import React, { Component } from 'react';

class AddFood extends Component {
    state = {
        name: '',
        calories: '',
        image: '',
        quantity: ''
    }

    handleForm = () => {
        this.setState({ showForm: !this.state.showForm })
      }

    
    handleChange = event => {
        // desestructuramos el name y el value de event.target
        let { name, value } = event.target
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
            image: '',
            quantity: ''
        })
    }

    render() {
        const { showForm } = this.state;
        return (
            <div>

        <button onClick={this.handleForm}>
          {showForm ? ('Close Form' ): ( 'Create New Food'  )}
         </button>
         {showForm && (   <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="title">Name:</label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                    
                    <label htmlFor="">Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>

                    <label htmlFor="">Quantity:</label>
                    <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)}/>

                    <label htmlFor="">Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/>

                    <input type="submit" value="Submit"/>
                </form>
                )}
            </div>
        );
    }
}

export default AddFood;