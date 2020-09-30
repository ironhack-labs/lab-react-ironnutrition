import React,{ Component } from 'react'
 

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: this.props.search
         }
    }
 

    handleInputChange = e => {
        e.preventDefault()
        let newSearch = e.target.value
        this.props.filterFood(newSearch)   
        
    }
    render() {
        
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                   <input type="text" name="search" value={this.state.search} onChange={this.handleInputChange} />
            </form>
            </>
        )
    }
    }
export default SearchBar