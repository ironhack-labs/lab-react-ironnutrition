import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: '',
    calories: '',
    image: '',
    quantity: 0
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event)=> {
          this.props.handleSubmit(event, this.state)
        }}>
          <input type="text" name="image" onChange={this.handleInput}/>
          <input type="text" name="name" onChange={this.handleInput}/>
          <input type="text" name="calories" onChange={this.handleInput}/>
          <input type="submit" placeholder="submit"/>
        </form>
      </div>
    );
  }
}

export default Form;