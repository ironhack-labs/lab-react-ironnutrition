import React from 'react'
import { Component } from 'react'
import './AddFoodForm.css'

class AddFoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: ''
        }
    }


    handleInputChange(e){
        const {name, type} =e.target
        let inputValue = type === 'file' ? e.target.file : e.target.value
        this.setState ({[name]: inputValue})
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.addFood(this.state)
    }



    render() {

        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" name="name" type="text" placeholder="Text input"  value={this.state.name} onChange={e => this.handleInputChange(e)}/>
                    </div>
                    <p class="help">Nombre de la comida</p>
                </div>
                <div class="field">
                    <label class="label">Calories</label>
                    <div class="control">
                        <input class="input" name="calories" type="text" placeholder="Text input" value={this.state.calories} onChange={e => this.handleInputChange(e)}/>
                    </div>
                    <p class="help">Numero de calorías ej: 200cal</p>
                </div>
                <div class="field">
                    <label class="label">Imagen</label>
                    <div class="control">
                        <input class="input" name="image" type="file" value={this.state.image} onChange={e => this.handleInputChange(e)} />
                    </div>
                    <p class="help">Aquí una imagen</p>
                </div>
                
                <div class="control">
                    <button class="button is-info">Añade tu comida</button>
                </div>
            </form>

        )
    }


}

export default AddFoodForm