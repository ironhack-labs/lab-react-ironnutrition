import React from "react";

export default class InputBar extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleChange(e) {
    this.state.text= e.target.value
    this.setState({ text: this.state.text });
    this.props.onChange(this.state.text,this.props.name);
  }

  render() {
    return (
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="text"
            placeholder={this.props.placeholder}
            value={this.state.text}
            onChange={(e)=>this.handleChange(e)}
          />
          <span className="icon is-small is-left">
            <i className={this.props.fasClass} />
          </span>
        </p>
      </div>
    );
  }
}
