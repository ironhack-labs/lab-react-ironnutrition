import { Component } from 'react'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    handleInputChange(e) {
        const {name} = e.target
        this.setState({ [name]: e.target.value}, this.props.searchFood(this.state.search))
        
    }

    render() {
        return(
                <input className="input" type="text" placeholder="Search food" value={this.state.search} onChange={(e) => this.handleInputChange(e)} name="search"></input>
        )
    }

}

export default Search