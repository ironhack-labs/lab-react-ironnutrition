import { Component } from 'react'
import './Search.css'

class Search extends Component {

    constructor() {
        super()
        this.state ={
            barValue: '',
        }
    }
    
    handleInputChange(e) {
        const value = e.target.value
        this.setState({ barValue: value })
        this.sendQuery(value)
    }

    sendQuery(query) {
       this.props.filterFood(query) 
    }

    render() {
        return (
            <input type="text" onChange={e => this.handleInputChange(e)} value={this.state.barValue}/>
        )
    }
}

export default Search

