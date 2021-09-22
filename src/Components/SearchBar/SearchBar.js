import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super();

    this.state = {
      input: '',
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
 
    this.props.filterFoods(this.state.input)

    this.setState({
      input: value      
    })
  }

  render() {
    return (
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input className="input" type="text" value={this.state.input} onChange={(e)=> this.handleChange(e)}/>
        </p>
      </div>
    );
  }
}
