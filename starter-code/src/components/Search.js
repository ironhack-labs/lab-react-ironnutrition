import React from 'react'

class Search extends React.Component {

  textHandler = (e) => {
    this.props.searchText(e.target.value)
  }

  render(){
    return (
      <div className="field has-addons">
        <div className="control">
          <input onChange={e => this.textHandler(e)} value={this.props.textState} name='textSearch' className="input" type="text" placeholder="Search..." />
        </div>
        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>
    )
  }

}

export default Search;