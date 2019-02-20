import React, { Component } from 'react'

export default class FoodForm extends Component {
    constructor(props){
        super(props);//propiedades del padre a las que quiero acceder.
        this.state = {
            name: "",
            calories: "",
            image: "",
            quantity: ""
        }
    }

    handleNameState = (e) => {
        console.log(e.target.value)
        this.setState({
            ...this.props.theFood,
            name: e.target.value
        })
    }

    handleCaloriesState = (e) => {
        console.log(e.target.value)
        this.setState({
            ...this.props.theFood,
            calories: e.target.value
        })
    }

    handleImageState = (e) => {
        console.log(e.target.value)
        this.setState({
            ...this.props.theFood,
            image: e.target.value
        })
    }

    render (){
        console.log()
        return (
            <form className={this.props.style} onSubmit={e=>this.props.functionProp(e, this.state)}>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.handleNameState}></input>
                <label>Calories</label>
                <input type="text" value={this.state.calories} onChange={this.handleCaloriesState}></input>
                <label>Image</label>
                <input type="text" value={this.state.image} onChange={this.handleImageState}></input>

                <button type="submit">Submit</button>
            </form>
        )
    }
        
}


