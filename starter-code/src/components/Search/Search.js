import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);

    
  }
  

  render() {
    return (
      <div>
        
        <div class="field">
          <div class="control">
            <input
              label="Search"
              class="input is-info"
              type="text"
              placeholder=""
              onChange={e => this.props.filtering(e.target.value)}/>
          </div>
        </div>
        
        <form />
      </div>
    );
  }
}
