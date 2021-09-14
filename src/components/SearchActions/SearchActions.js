import React, {Component} from 'react';

class SearchActions extends Component {
  state = {
      name: '',
  }

  handleChange = event => {
    const {name, value} = event.target;
   
    this.setState({ [name]: [value]});
};

    render() {
        return (
            <input type="text" name="name" placeholder="search food by name" value={this.state.value} onChange={this.handleChange} />
        );
    };
}

export default SearchActions;