import React, { Component } from 'react';

class FilterActions extends Component {
  state = {
    name: '',
  };

  handleSearchFoods = (event) => {
    this.setState({ name: event.target.value }, () => {
      this.props.filterFoods(this.state.name);
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Filtrar pelo nome da comida"
          onChange={(event) => this.handleSearchFoods(event) }
        />
      </div>
    );
  }
}

export default FilterActions;
