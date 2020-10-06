import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class InputSearch extends React.Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.props.searchFoods(e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="field">
        <div className="field-body">
          <div className="field">
            <p className="control has-icons-right">
              <input
                className="input"
                name="search"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-right">
                <FontAwesome name="search" />
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
