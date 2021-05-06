import React from 'react'

class Search extends React.Component{

    render(){
        return(
            <div className="search-bar">
                <input onChange={(e)=>this.props.filter(e)} type="text" name="search" placeholder="Search food" />
            </div>
        )
    }
}

export default Search
