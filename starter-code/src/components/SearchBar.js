import React, {Component} from 'react';

class SearchBar extends Component {

  state = {
    'searchValue': '',
  };

  handleChange = (e) => {
    this.setState({
      'searchValue' : e.target.value,
    });
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <input onChange={this.handleChange} type="text" className="input search-bar" name="search" placeholder="Search" value={this.state.searchValue}/>
    );
  }
}

export default SearchBar;