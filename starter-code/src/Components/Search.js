import React from "react";
import FormField from './FormField';


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  handleChangeInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.showSearchResultsMethod(this.state.searchTerm)
  }

  render() {
    return (
      <div>
        <FormField onChange={this.handleChangeInput} type="text" name="searchTerm" placeholder="search for food" />
      </div>
    )
  }
}

export default Search;