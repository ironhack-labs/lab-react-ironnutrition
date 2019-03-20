import React, {Component} from 'react'


class SearchBar extends Component {

constructor(props) {

  super(props)

  this.state = {

    search: ""

  }

}


handleFormSubmnit = e => {
  e.preventDefault()
  this.props.search(this.state.search)
  this.setState({
    search: "",

  })
}

render(){

  return(
    <form onSubmit={(e) => this.handleFormSubmnit(e)}>
      <input type="text"/>
    </form>
    )

}

}

export default SearchBar