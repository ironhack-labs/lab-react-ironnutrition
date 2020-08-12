import React, {Component} from 'react'

//CREAR EL FORMULARIO PARA AGREGAR COMIDA 

class Form extends Component {
    constructor (){
        super ()
        this.state = {
            name: "",
            calories: "",
            image: ""

        }
    }

    //PROPS DE COMIDA
    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
        })
    }
    //TOMAR EL VALOR (EJEMPLO ADDMOVIES)
    handleInput = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name] : value})
    }
    render () {
        return (
                <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                <div class="field">
                <div class="control">
                    <label>Nombre</label>
                    <input className="input is-primary" name='name' type="text" value={this.state.name} placeholder="Primary input" onChange={this.handleInput}/>
                    </div>
                </div>

                <div class="field">
                <div class="control">
                    <label>Calorias</label>
                    <input className="input is-primary" name="calories"type="text" value={this.state.calories} placeholder="Primary input" onChange={this.handleInput}/>
                    </div>
                </div>
                
                <div class="field">
                <div class="control">
                    <label>Imagen</label>
                    <input className="input is-primary" name="image" type="text" value={this.state.image} placeholder="Primary input" onChange={this.handleInput}/>
                    </div>
                </div>
                <button >Lets do it!</button>
                </form>
                </div>
        )
    }

    
}




export default Form