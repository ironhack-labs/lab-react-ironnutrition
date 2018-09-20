import React from "react";

class Search extends React.Component {
  genericUpdate(event) {
    const { value } = event.target;

    searchFunction(value);
  }

  render() {
    return (
      <form>
        <input
          onChange={event => this.genericUpdate(event)}
          placeholder="Search for ..."
          type="text"
        />
      </form>
    );
  }
}

export default Search;
