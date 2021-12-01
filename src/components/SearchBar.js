import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    input: '',
  };

  handleChange = (e) => {
    const { value } = e.currentTarget;

    this.setState({
      input: value,
    });

    this.props.filterFoods(value);
  };

  render() {
    return (
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            name="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </p>
      </div>
    );
  }
}
