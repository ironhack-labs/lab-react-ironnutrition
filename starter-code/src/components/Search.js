import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {

        super(props)

        this.state = {
            query: ""
        }
    }

    handleChange = e => {
        this.props.searchFood(e.target.value)
        this.setState({
            query: e.target.value
        })
    }

    render() {
        return (

            <form onSubmit={(e) => e.preventDefault()}>
                <input type="search" value={this.state.query} onChange={(e) => this.handleChange(e)} placeholder="Busca un plato"/>
            </form>
        )
    }       
}


export default Search
