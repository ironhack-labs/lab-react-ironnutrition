import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Search extends Component {
  state = {
    name: '',
  }

  handleInput = (e) => {
    const { change } = this.props;
    const { name } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
    });
    change(name);

  };
  render(){

    const { name } = this.state;
    return (<div>
      <input className="input" name="name" type="text" onChange ={this.handleInput} value ={ name }/>
    </div>)
  }
}

export default Search; 