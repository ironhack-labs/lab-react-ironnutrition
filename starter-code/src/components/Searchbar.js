import React, { Component } from "react";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarValue: ""
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.props.filteringFood(this.state);
    });
  }

  render() {
    return (
      <div className="search-bar">
        <textarea
          name="searchBarValue"
          value={this.state.searchBarValue}
          onInput={e => this.handleChange(e)}
        />
      </div>
    );
  }
}

export default Searchbar;
