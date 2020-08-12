import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        name: '',
    }

    //IT4.4: Creo una función que recoja el value del input y lo guarde en el state.
    //Le paso ese value a la función que viene de app.js
    handleInputChange = event => {
        let {name, value} = event.target;
        this.setState({
            [name]: value
        })
        this.props.filterFood(value)
    }


    render() {
        return (
            <form>
                <label>Search food: </label>
                {/* IT4.5: Cuando el campo de input se cambia, se invoca la función*/}
                <input name="name" type="text" value={this.state.name} onChange={(e) => this.handleInputChange(e)} />
            </form>
        )
    }
}
