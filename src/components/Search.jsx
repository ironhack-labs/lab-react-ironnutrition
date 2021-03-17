



import React, { Component } from 'react';

export default class Search extends Component {


    handleChange=(event)=>{
        this.props.getTheInput(event.target.value)
    }

  render() {
      
    return (
      <div>
        <form>
          <input type="text" id="input" placeholder="Search..." 
            onChange={this.handleChange}
            name="input"
          />
        </form>
      </div>
    );
  }
}