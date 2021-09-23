import React from 'react'

export default class AddFood extends React.Component {

    state = { 

        name: "",
        calories: "",
        image: "",
        quantity: 0

    }

    handleChange = (e) => {
        const { value,  name} = e.target;
        this.setState({
          ...this.state,
          [name]: value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFood(this.state);
        this.setState({
          
            name: "",
            calories: "",
            image: "",
            quantity: 0
        })
      }

   render () {

    return (
        <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Nombre: <input type="text" value={this.state.name} name="name" onChange={e => this.handleChange(e)} />
        </label>
        <label>
          Calorias: <input type="text" name="calories" value={this.state.calories} onChange={e => this.handleChange(e)} />
        </label>
        <label>
          Imagen: <input type="text" name="image" value={this.state.image} onChange={e => this.handleChange(e)} />
        </label>
        {/* <label>
          Cantidad: <input type="number" name="quantity" value={this.state.quantity} onChange={e => this.handleChange(e)} />
        </label>  */}
        <input type="submit" value="Crear comida" />
      </form>
        </div>
    )}
}
