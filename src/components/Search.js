import React from 'react'

class Search extends React.Component {
  render(){
    return (
        <div className="Search">
            <input type="text" onChange={(e)=>this.props.filter(e)} />
        </div>
    )
  }
}

export default Search;