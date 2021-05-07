import React from 'react';


class Search extends React.Component {


  inputChange(event) {
    const value = event.target.value;
    this.props.search(value);
  }

  render() {
    return (
      <label>
        Search <input type="text" name="search" onChange={event => this.inputChange(event)} />
      </label>)
  }


}

export default Search;