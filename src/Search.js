import { Component } from 'react';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.searchFilter(this.state);

    this.setState({
      searchQuery: '',
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label className="column is-full is-centered">
            Search:{' '}
            <input
              type="text"
              value={this.state.searchQuery}
              onChange={this.handleChange}
              name="searchQuery"
            />
          </label>

          <button type="submit" className="column is-centered">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default Search;
