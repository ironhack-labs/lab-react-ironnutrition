import React, { Component } from "react"


class SearchBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
          filtered: this.props.items
      }
  }

  handleChange = e => {
       
      if (e.target.value !== "") {
     
        let newList = this.state.filtered.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
       
        this.props.filterFood(newList)
      }
  }

  render(){
    return(
        <div>
           <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
            <ul>
            ...
            </ul>
        </div>
    )
  }
}

export default SearchBar