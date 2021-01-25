import React from 'react'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    searchInput = (e) =>{
        const newValue = e.target.value
        this.setState({
            searchValue: newValue
        })

        this.props.filterFood(newValue)

    }



    render(){
        return(
            <div>
                <input type='text' name='search' value={this.state.searchValue} onChange={this.searchInput}/>
            </div>
        )
    }
}

export default SearchBar