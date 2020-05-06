import React,{ Component} from 'react'

class SearchBar extends Component {

    constructor() {
        super()
        this.state = {
        name: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.searchFood(this.state.name)
    }


    render() {
        return (
            <input type="search" name="name" value={this.state.name} onChange={this.handleChange}></input>

        )
    }

}

export default SearchBar