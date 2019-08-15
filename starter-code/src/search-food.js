import React, { Component } from 'react'

class SearchFood extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }


    handleFormSubmit = e => {
        e.preventDefault()
        console.log(this.props)
        this.props.searchFood(this.state.name)
        this.setState({
            name: '',
        })
    }

    handleInputChange = e => {

        let { name, value } = e.target

        this.setState({ [name]: value })
    }



    render() {
        return (

            <section>

                <form onSubmit={this.handleFormSubmit}>

                    <label>
                        Search: 
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </label> <br />

                    <input type="submit" value="Enviar" />
                </form>

            </section>

        )
    }
}

export default SearchFood;