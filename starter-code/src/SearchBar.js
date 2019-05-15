import React from "react";

class SearchBar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <input
            className="searchbox"
            type="text"
            name="name"
            onChange={this.props.searchFoods}
          />{" "}
          <button type="submit"> SEARCH </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
