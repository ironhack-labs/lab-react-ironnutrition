import React from 'react';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChange = (e) => {
    let { value } = e.target;
    this.setState({ search: value });
    this.props.search(this.state.search);
  };

  render() {
    return (
      <div className="search">
        <input
          name="search"
          className="input"
          type="search"
          placeholder="Search"
          value={this.state.search}
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
}

export default Search;
