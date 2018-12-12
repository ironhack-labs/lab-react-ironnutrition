import React, {Component} from 'react'
import foods from './foods.json'
import FoodBox from './FoodBox'
import './home.css'
import Form from './Form'


class Home extends Component{

    state={
        showForm:false
    }

    toggleForm = () =>{
        //Para cambiarlo de verdadero a falso
        let { showForm } = this.state
        showForm = !showForm
        this.setState({ showForm })
    }

    handleSubmit = e =>{
        e.preventDefault()
        const { foods, newFood } = this.state
        newFood.id = newFood.name
        foods.push(newFood)
        this.setState(foods)
    }

    onChange = e =>{
        const value = e.target.value
        const field = e.target.name
        const { newFood } = this.state
        newFood[field] = value
        this.setState(({ newFood }))
    }

    render(){
        const { showForm, newFood }= this.state
        return(
            <div>
                <button onClick={this.toggleForm}>
                    {showForm ? "Cancelar" : "Agregar nueva comida"}
                </button>

                {showForm && (
                    <Form {...newFood} onChange={this.onChange} handleSubmit={this.handleSubmit}/>
                )}

                {foods.map((foods, index)=>
                <FoodBox key={index} {...foods}/>)}
            </div>
        )
    }
}


export default Home