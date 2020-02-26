import React, {Component} from 'react'
import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            field: ""
        }


    }

    searchHandler = e => {
        this.setState({field:e.target.value}, ()=>this.props.setFilter(this.state.field))
    }

    render() {
        return (
            <input className="search" onChange={this.searchHandler} value={this.state.field}></input>
        )
    }
}




export default Search