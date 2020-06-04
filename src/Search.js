import React from 'react';



class Search extends React.Component {

  state = {
    name: "",
  }

 nameChangeHandler = (event) => {
    
    let currentInputValue = event.target.value

    this.setState({
      name: currentInputValue
    })
  }


  searchHandler = (event) => {
    event.preventDefault()

    let imput = this.state

    // we need to pass an object that looks like { name: "askldjhasd", calories: "alkdhlkashj" }
    this.props.searchHandler(imput) // TODO: pass the newly created movie

    // reset to initial (empty) state
    this.setState({
      name: "",
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchHandler}>
          Search: <input name="name" value={this.state.name} onChange={this.searchHandler}></input>
        </form>
      </div>
    )
  }

}


export default Search;