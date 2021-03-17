import React, { Component } from 'react'
import 'bulma/css/bulma.css';

export default class CreateFood extends Component {

    state = {
        createFood: false,
        newFood: {
            name: "", 
            calories: "", 
            image: "",
            quantity: 0
        }
    }

    handleDrawForm = () => {
        this.setState({createFood: !this.state.createFood})
    }

    getInputValue = event => {
        const newFood = {...this.state.newFood} ;
        newFood[event.target.name] = event.target.value ;
        this.setState({newFood: newFood}) ;
    }

    addFood = event => {
        event.preventDefault() ;
        this.props.addFood(this.state.newFood) ;
        this.setState({
            createFood: false,
            newFood: {
                name: "", 
                calories: "", 
                image: "",
                quantity: 0
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleDrawForm} className="button">Add pizza</button>
                {
                    this.state.createFood && 
                    <form action="" className="field"  onSubmit={this.addFood}>
                        <label htmlFor="name">Name </label>
                        <input type="text" name="name" id="name" onChange={this.getInputValue} value={this.state.newFood.name}/>
                        <label htmlFor="calories">Calories </label>
                        <input type="text" name="calories" id="calories" onChange={this.getInputValue} value={this.state.newFood.calories}/>
                        <label htmlFor="image">Images </label>
                        <input type="text" name="image" id="image" onChange={this.getInputValue} value={this.state.newFood.images}/>
                        <button> Submit</button>
                    </form>
                }
            </div>
        )
    }
}
