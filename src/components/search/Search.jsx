import React from 'react';

class Search extends React.Component {
  state = {
    name: '',
  };

  handleSearch = (event) => {
    let { value } = event.target;
    this.setState({name: value});
    this.props.searchFood(value);
  };

  render() {
    return (
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Search a food"
            name="name"
            value={this.state.name}
            onChange={this.handleSearch}
          />
        </div>
      </div>
    );
  }
}

export default Search;
