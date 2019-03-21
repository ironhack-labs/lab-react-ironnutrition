import React, {Component} from 'react';


class Search extends Component {

  constructor(props) {

    super(props)

    this.state = {
      name: '', 
      
    }

  }

  handleChange = e => {
    let { name, value } = e.target;
    
    this.setState({
      [name]: value
    }, () => {
      this.props.searchForFood(this.state.name)
    });

  }


  render () {

    return (
      <div class="search-bar">
          <div class="search">

            <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
           
           </div>
      </div>
  )

  }
}




export default Search