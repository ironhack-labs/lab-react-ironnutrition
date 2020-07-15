import React, { Component } from 'react'
import 'bulma/css/bulma.css';


class Search extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: '',
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.insertFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: '',
            active: false,
            search: '',
        })
    }



    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }

    switchButton = () => this.setState({ active: !this.state.active })

    searchFood = (e) => {
    this.setState({ search: })
    } 

    render() {

        return (
            <>
                <form className="field" onSubmit={this.handleFormSubmit}>


                    <input className="input" name="search" type="text" value={this.state.search} onChange={this.handleInputChange} />


                    <button onClick={this.switchButton} className="button is-link is-light">Submit!</button>
                </form>

            </>
        )
    }
}

export default Search