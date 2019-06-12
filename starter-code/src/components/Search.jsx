import React, { Component } from 'react';

class Search extends Component {

handleOnChange = (event) => {
    this.props.updateList(event.target.value)
}

render() {
    return (
        <div>
            <input
                type="text"
                id="addInput"
                placeholder="Search for food..."
                onChange={(e) => this.handleOnChange(e)}></input>
        </div>
    );
}
  }

export default Search;