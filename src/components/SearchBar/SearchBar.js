import React from "react";

class SearchBar extends React.Component {

    state = {
        search: '',
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({
            ...this.state,
            [name]: value,
        }, () => this.searchFood())

    }

    searchFood = () => {
        const filtered = this.props.list.filter(food => {
            return food.name.toLowerCase().includes(this.state.search.toLowerCase())
        })
        this.props.filterFood(filtered)
    }

    render() {
        return (
            <label>
                <input type="text" value={this.state.search} name="search" onChange={(e) => this.handleChange(e)} />
            </label>
        )
    }
}

export default SearchBar