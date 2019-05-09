import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    search: ''
  };

  handleInput = ({ target: input }) => {
    const { updateFilter } = this.props;
    const { value } = input;

    this.setState({
      search: value
    });

    updateFilter(value);
  };

  render() {
    const { handleInput } = this;
    const { search } = this.state;

    return (
      <section>
        <div className="field">
          <label className="label">Search:</label>
          <div className="control">
            <input type="text" className="input" placeholder="Search" value={search} onChange={handleInput} />
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBar;
