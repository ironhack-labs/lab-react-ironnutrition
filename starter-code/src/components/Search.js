import React from 'react'

class Search extends React.Component {

  state={
    text:''
  }

  textHandler = (e) => {
    this.setState({
      text:e.target.value
    })
    this.props.searchText(e.target.value)
  }

  render(){
    return (
      <div className="field has-addons">
        <div className="control">
          <input onChange={e => this.textHandler(e)} value={this.state.text} name='textSearch' className="input" type="text" placeholder="Search..." />
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