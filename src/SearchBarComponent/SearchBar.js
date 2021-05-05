import { Component } from "react";

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            filter: ""
        }
    }

    handleInputChange(e) {

        const value = e.target.value
        // Computed property names
        this.setState({ filter: value }, () => {

            this.getFilterWord()
        })
    }

    getFilterWord() {
        const theFilter = this.state.filter

        this.props.filterFood(theFilter)
    }

    render() {
        return (
            <div>
                <label>Filtro de Busqueda</label>
                <input value={this.state.filter} onChange={e => this.handleInputChange(e)} type="text" name="filter"></input>
            </div>
        )
    }
}

export default SearchBar