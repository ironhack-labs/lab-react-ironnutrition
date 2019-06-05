import React, {Component} from "react"


class SearchBar extends Component {

  constructor(props) {

      super(props)

      this.state = {
          
      }
  }

  handleChange = e =>{
    let {name, value} = e.target
    this.setState({[name]: value}, ()=> {
      this.props.filterFoods(this.state[name])
    })
  }


  render() {
    
    return (
      <form>
        <input id="searchbar" type="search" name="searchbar" value={this.state.searchbar} onChange = {(e) => this.handleChange(e)}/>
      </form>
    )}}

    export default SearchBar