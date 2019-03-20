import React, { Component } from 'react';

class Search extends Component {

    constructor(props){
        super(props);
  
        this.state = { 
          text: ''
          }
    }

    handleChange(e) {
        let {value } = e.target
        this.setState({text: value}, () => {
        this.props.searchFood(this.state.text)
        }
        )
    }
  
    render(){
      return (
        <div>
            <form>
              <input type="text" name="text" value={this.state.text} onChange={(e) => this.handleChange(e)} />
            </form>
        </div>
      )
    }
  }
  
export default Search;