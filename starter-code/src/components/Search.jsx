import React from "react";

class Search extends React.Component {
  state = {
    searchValue: "",
  };

  handleOnChange = (event) => {
    this.setState({
      searchValue: event.target.value
    });
    this.props.handleSearch(event.target.value)
  };

  render() {
    return (
      <div>
        <input
          className="search-bar input is-primary"
          placeholder="Search for food..."
          type="text"
          name="text"
          value={this.state.searchValue}
          onChange={event => this.handleOnChange(event)}
        />
        {/* <button onClick={this.handleSearch}>Search</button> */}
      </div>
    )
  }
}

export default Search;