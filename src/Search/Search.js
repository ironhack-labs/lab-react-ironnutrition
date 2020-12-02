import React from 'react'

class Search extends React.Component {

    state = {
        query: ''
    }

handleSearch = (event) => {

}
    
    render() {
        return (
            <div>
                <input type="text" value={this.state.query} placeholder="Search some food" onChange={this.handleSearch} />
            </div>
        )
    }
}


export default Search